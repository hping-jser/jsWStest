define(['angular', 'app'], function(angular, app){
    "use strict";
    angular.module(app.name)
    .controller('appCtrl', ['$scope', '$timeout', 'utilFactory',
    function($scope, $timeout, utilFactory){
        utilFactory.gotoState('login', true);
        $scope.hintInfo = {
            isShow: false,
            content: ''
        };
        $scope.$on('showhint', function(event, content){
            $scope.hintInfo = {
                isShow: true,
                content: content
            };
            $timeout(function(){
                $scope.hintInfo.isShow = false;
            },1000);
        });
        $scope.$on('showhintL', function(event, content){
            $scope.hintInfo = {
                isShow: true,
                content: content
            };
        });
        $scope.$on('hidehintL', function(){
            $scope.hintInfo.isShow = false;
        });
 
    }]);
});