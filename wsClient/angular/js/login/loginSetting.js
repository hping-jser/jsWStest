define(['angular', 'login/login'], function(angular, app){
    "use strict";
return angular.module(app.name)
.run(['$templateCache', function($templateCache){
    
    var tmpHtml = [
        '<div class="login-set-bg">',
            '<div class="login-set-header">',
                '<button class="login-btn-set-back" ng-click="back()">返回</button>',
            '</div>',
            '<div>',
                '<p><span>地址：</span><input ng-model="server.addr"/></p>',
                '<p><span>端口：</span><input ng-model="server.port"/></p>',
            '</div>',
            // '<h3>登录设置</h3>',
        '</div>'
    ].join('');
    
    $templateCache.put('tpl/loginSetting.html', tmpHtml);
    
}]);

});