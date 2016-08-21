define(['angular'], function(angular){
    "use strict";
return angular.module('imDialog',[])
.run(['$templateCache', function($templateCache){
    
    var tmpHtml = [
        '<div class="im-dialog-background">',
             // pic
        '    <div class="im-dialog-header">',
//      '        <div>',
        '        IM对话DEMO',
                '<span class="im-get-users" ng-click="getUserList()">{{account || \'选择账户\'}}</span>',
                '<div class="im-user-list" ng-show="isShowUsers">',
                    '<p ng-repeat="user in userList track by $index" ng-click="selectUser(user)">{{user}}</p>',
                '</div>',
        '    </div>',
             // account input
        '    <div class="im-dialog-section">',
                '<p class="im-msg-chat" ng-repeat="msg in msgList track by $index" ng-class="{\'right\':msg.isMe}">{{msg.content}}</p>',
        '    </div>',
             // copy 版权所有
        '    <div class="im-dialog-footer">',
        '        <div class="im-dialog-footer-input">',
        '            <div class="im-dialog-footer-btn"><span ng-click="showEm()">表情</span></div>',
        '            <div class="im-dialog-input" contenteditable="true"></div>',
        '            <div class="im-dialog-footer-btn"><span ng-click="send()">发送</span></div>',
        '        </div>',
        '        <div class="im-dialog-ems" ng-show="isShowEm">',
        '            <div ng-repeat="em in ems" ng-click="insertEm(em)"><img ng-src="img/em/{{em}}.gif" /></div>',
        '        </div>',
        '    </div>',
        '</div>'
    ].join('');

    $templateCache.put('tpl/imDialog.html', tmpHtml);
    
}]);

});