define(['angular', 'app'], function(angular, app){
    "use strict";
    angular.module(app.name)
    .config(['$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
       
        $urlRouterProvider.otherwise("welcome");
        $stateProvider
        .state("welcome", {
            url: "/welcome",
            templateUrl: "tpl/welcome.html"
        })
        .state("login", {
            url: "/login",
            templateUrl: "tpl/login.html",
            controller: 'loginCtrl'
        })
        .state("loginSetting", {
            url: "/loginSetting",
            templateUrl: "tpl/loginSetting.html",
            controller: 'loginCtrl'
        })
        .state("imDialog", {
            url: "/imDialog",
            templateUrl: "tpl/imDialog.html",
            controller: 'imDialogCtrl'
        });
        //
    }]);
});