define(['angular', 'app'], function(angular, app){
    "use strict";
angular.module(app.name)
.factory('consFactory', [
function(){
    var services = {
        appName: 'wsDemo',
        isOnline: false,
        isDebug: true
    };
    services.sendType = {
        LOGIN: '0'
    };
    
    /* 广播常量  */
    services.broadcast = {
        AA: 'AA',
        BB: 'BB'
    };
    
    /* 路由常量  */
    services.state = {
        WELCOME: 'welcome',
        LOGIN: 'login',
        LOGIN_SETTING: 'loginSetting',
        STATE: 'state'
    };
    
    /* 打印日志的样式  */
    var LOG_FONT_SIZE = 'font-size:0.9rem;';
    services.logStyle = {
        SUCCESS: LOG_FONT_SIZE + 'color:#08B32E;',
        FAILED: LOG_FONT_SIZE + 'color:red;',
        WARNING: LOG_FONT_SIZE + 'color:#F1AB07;',
        INFO: LOG_FONT_SIZE + 'color:#8FB535;'
    };
    
    
    return services;
}]);
});