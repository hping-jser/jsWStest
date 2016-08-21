define(['angular', 'login/login'], function(angular, app){
    "use strict";
angular.module(app.name)
.factory('imDialogFactory', ['commonFactory', 'consFactory', 'utilFactory',
function(commonFactory, consFactory, utilFactory){
    
    var service = {
        ems: [],
        account: 1111111111111111
    };

    service.sendMsg = function( msg ){
        var account = service.account;
        if( !account ){
            return;
        }
        return commonFactory.sendMsg({
            content: msg,
            form: consFactory.account,
            to: account
        }, 'CHAT');
    };
    
    for(var i = 1; i<51; i++){
        service.ems.push(i);
    }
    
    return service;
}]);

});