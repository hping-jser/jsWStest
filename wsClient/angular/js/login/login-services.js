define(['angular', 'login/login'], function(angular, app){
    "use strict";
angular.module(app.name)
.factory('loginFactory', ['commonFactory', 'consFactory', 'utilFactory','$q',
function(commonFactory, consFactory, utilFactory, $q){
    
    var service = {
        server: {
            addr: '192.168.1.101',
            port: '8888'
        },
        account: {
            type: 1,
            user: 'huangping1',
            psd: '12345678'
        }
    };
    service.login = function(){
        var deffer = $q.defer();
        commonFactory.initSdk( service.server.addr, service.server.port )
        .then(function(){
            var data = service.account;
            commonFactory.sendMsg( service.account, 'LOGIN')
            .then(function(data){
                deffer.resolve(data);
            }, function(){
                deffer.reject();
            });
        },function(){
            deffer.reject();
        });
        return deffer.promise;
    };
 
    return service;
}]);

});