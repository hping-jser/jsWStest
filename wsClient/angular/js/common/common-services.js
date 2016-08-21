define(['angular', 'app'], function(angular, app){
    "use strict";
angular.module(app.name)
.factory('commonFactory', ['$q', '$rootScope', 'utilFactory', function( $q, $rootScope, utilFactory ){
    var service = {};
    var ws;                                          // webSocket对象
    var sdkState = 0;                                // ws 状态  new WebSocket("ws://127.0.0.1:80");
    var sno = 0;
    var msgList = {};
    function getSno(){
        if( sno > 65530 ){
            sno = -1;
        }
        sno ++;
        return sno;
    }
    function initWebSocket( addr, port ){
        var deferred = $q.defer();
        if( WebSocket ){
            try{
                ws = new WebSocket( "ws://" + addr + ":" + port );
                deferred.resolve(ws);
            }catch(err){
                deferred.reject();
                utilFactory.log( "无法链接服务器" );
                utilFactory.log(err);
            }
        }
        else{
            utilFactory.log( "您的浏览器不支持webSocket" );
            deferred.reject();
        }
        return deferred.promise;
    }
    service.initSdk = function( addr, port ){
        var deffer = $q.defer();
        if( 1 === sdkState ){
            deffer.resolve();
            return deffer.promise;
        }
        initWebSocket( addr, port )
        .then( function( ws ){
            console.log(ws);
            sdkState = 1;
            ws.onopen = function(){
                deffer.resolve();
                utilFactory.log( 'open' );
            };
            ws.onmessage = function( message ){
                var data = JSON.parse( message.data );
                var sno = data.param.sno;
                console.log(msgList);
                console.log(sno);
                if( sno && msgList[sno] ){
                    msgList[sno].resolve( data.param );
                    delete msgList[sno];
                }
                else{
                    $rootScope.$broadcast( data.cmd, data.param );
                }
            };
            ws.onclose = function(){ utilFactory.log("已经离线0"); sdkState = 0;utilFactory.gotoState('login') };
            ws.onerr = function(){ utilFactory.log("已经离线0"); sdkState = 0; utilFactory.gotoState('login')};
        },function(){
            deffer.reject();
        });
        return deffer.promise;
    };

    service.sendMsg = function( data, cmd ){
        var deffer = $q.defer();
        var sno = getSno();
        var message = {
            cmd: cmd,
            param: data
        };
        if( 1 !== sdkState || !ws ){
            utilFactory.gotoState('login');
            deffer.reject();
            utilFactory.log( "已经离线" );
        }
        else{
            data.sno = sno;
            msgList[ sno ] = deffer;
            ws.send(JSON.stringify(message));
        }
        return deffer.promise;
    };



    return service;
}]);
});