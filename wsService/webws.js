"use strict";
function log( str ){
    console.log( str );
}
(function(){
    var PORT = 8888;
    var links = 0;                                  // 链接数
    var wsList = {};                                // 客户端
    var WsServer = require('ws').Server;
    var wsServer = new WsServer({port: PORT}, function(){
        log( "webSocket 已经启动！" );
    });
    wsServer.on( "connection", function( ws ){
        links++;
        log( "链接数：" + links );
        ws.on( "message", function( message ){
            // log( this );
            var data = JSON.parse( message );
            var cmd = data.cmd;
            switch ( cmd ){
                case "LOGIN":
                    login( data.param, ws);
                    break;
                case "CHAT":
                    sendChat( data.param, ws );
                    break;
                default:
                    break;
            }
            log( data );
        });
        ws.on( "close", function(){ links-- } );
        ws.on( "error", function(){ log( 'error' ) } );
    });

    function login( data,ws ){
        var type = data.type;
        var psd = '12345678';
        var user = data.user;
        var isLogin = user && psd == data.psd;
        if( wsList[ user ] ){
            sendMessage( ws, 'LOGIN', {
                sno: data.sno,
                desc: user + '已经在其他地方登陆',
                success: false
            });
            log( user + '已经在其他地方登陆' );
        }else if( 0 === type ){
            sendMessage( ws, 'LOGIN',{
                sno: data.sno,
                key: 'qadfdfsdfdsfdsfds'
            } );
        }
        else if( 1 === type ){
            if( isLogin ){
                wsList[ user ] = ws;
                wsList[ user ].on( "close",function(){
                    log( user + "已经离线" );
                    delete wsList[ user ];
                });
                log( user + '已经已登陆' );
            }
            sendMessage( ws, 'LOGIN', {
                sno: data.sno,
                success: isLogin
            });
        }
    }
    function sendChat( data,ws ){
        var user = data.to;
        var temp = {sno: data.sno,success: false};
        if( wsList[ user ] ){
            delete  data.sno;
            sendMessage( wsList[ user ], 'CHAT' );
            temp.success = true;
        }
        sendMessage( ws, 'CHAT', temp );
    }
    function sendMessage( clent, cmd, data ){
        var message = {
            cmd: cmd,
            param: data
        };
        if( clent.send ){

            clent.send( JSON.stringify( message ) );
        }
    }
}());