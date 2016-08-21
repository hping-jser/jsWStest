define(['angular'], function(angular){
    "use strict";
return angular.module('login',[])
.run(['$templateCache', function($templateCache){
    
    var tmpHtml = [
        '<div class="login-background">',
             // pic
            '<div class="login-header">',
                '<img ng-src="img/avatar/20160404002525.jpg">',
            '</div>',
             // account input
            '<div class="login-section">',
                '<div><input type="text" placeholder="请输入用户名" ng-model="account.user" /></div>',
                '<div><input type="password" placeholder="请输入密码" ng-model="account.psd" /></div>',
                '<div class="login-btn-login" ng-click="login()" ng-class="{\'login-btn-login-disabled\':!account.password || !account.user}">',
                '登录</div>',
            '</div>',
             // copy 版权所有
            '<div class="login-footer">',
                '<button class="login-btn-set" ng-click="gotoSetting()">设置</button>',
                '<div class="login-footer-hidden"></div>',
                '<div class="login-copyright">版权所有</div>',
            '</div>',
        '</div>'
    ].join('');
 
    $templateCache.put('tpl/login.html', tmpHtml);
    
}]);

});