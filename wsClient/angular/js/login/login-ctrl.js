define(['angular', 'login/login', 'login/welcome', 'login/loginSetting', 'login/login-services'], function(angular, app){
    "use strict";
angular.module(app.name)
.controller('loginCtrl', ['$scope', '$timeout','$location', 'consFactory', 'utilFactory', 'commonFactory', 'loginFactory',
function($scope, $timeout, $location, consFactory, utilFactory, commonFactory, loginFactory){
    $scope.account = loginFactory.account;
    $scope.server = loginFactory.server;
   $scope.login = function(){
       console.log($scope.account);
       $scope.$emit('showhintL', '正在登陆，请稍后。。。');
       loginFactory.login()
       .then(function(data){
           var desc = data.desc;
           console.log(data);
           if( data.success ){
               $scope.$emit('hidehintL');
               utilFactory.gotoState('imDialog', true);
               consFactory.isOnline = true;
               consFactory.account = $scope.account.user;
               utilFactory.log( "登录成功" );
           }
           else{
               if( !desc ){
                   desc = "密码错误";
               }
               $scope.$emit('showhint', desc);
               utilFactory.log( desc );
           }
       },function(){
           $scope.$emit('showhint', '服务器链接失败');
           utilFactory.log("服务器链接失败");
       });
   };
    $scope.gotoSetting = function(){
        utilFactory.gotoState('loginSetting', true);
    };
    $scope.back = function(){
        utilFactory.gotoState('login', true);
    };
    document.oncontextmenu = function(){
        return false;
    };
}]);

});