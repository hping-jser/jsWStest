define(['angular', 'login/login'], function(angular, app){
    "use strict";
return angular.module(app.name)
.run(['$templateCache', function($templateCache){
    
    var tmpHtml = [
        '<div class="" ng-controller="loginCtrl">',
        '    <div>欢迎界面</div>',
        '    ',
        '</div>'
    ].join('');
    
    $templateCache.put('tpl/welcome.html', tmpHtml);
    
}]);

});