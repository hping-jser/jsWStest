define(['angular', 'app'], function(angular, app){
    "use strict";
angular.module(app.name)
.factory('emulatorFactory', ['constantFactory',
function(constantFactory){
    var services = {};
    // 登录
    services[constantFactory.sendType.LOGIN] = {
        huangping1: {
            user: 'huangping1',
            password: '123',
            errorCount: 0
        },
        huangping2: {
            user: 'huangping2',
            password: '123',
            errorCount: 0
        },
        huangping3: {
            user: 'huangping3',
            password: '123',
            errorCount: 0
        }
    };
    return services;
}]);
});