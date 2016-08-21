define(['angular', 'imDialog/imDialog', 'imDialog/imDialog-services'], function(angular, app){
    "use strict";
angular.module(app.name)
.controller('imDialogCtrl', ['$scope', '$timeout', 'consFactory', 'utilFactory', 'commonFactory', 'imDialogFactory',
function($scope, $timeout, consFactory, utilFactory, commonFactory, imDialogFactory){
    $scope.account = '';
    $scope.isShowUsers = false;
    $scope.userList = [];
    $scope.msgList = [];
    $scope.getUserList = function(){  // GET_USER
        $scope.$emit('showhintL', '正在获取用户列表');
        commonFactory.sendMsg( {
            account: consFactory.account
        },'GET_USER' )
        .then(function(data){
            $scope.$emit('hidehintL');
            console.log(data.userList);
            $scope.isShowUsers = true;
            $scope.userList = data.userList;
        },function(){
            $scope.$emit('hidehintL');
        });
    };
    $scope.selectUser = function( user ){
        $scope.account = user;
        imDialogFactory.account = user;
        $scope.isShowUsers = false;
    };

    $scope.send = function(){
        var msg = document.querySelector(".im-dialog-input").innerHTML;
        document.querySelector(".im-dialog-input").innerHTML = '';
        if( !imDialogFactory.account ){
            return;
        }
        updateMsgList({
            isMe: true,
            content: msg
        });
        imDialogFactory.sendMsg( msg )
        .then(function(data){
            if( !data.success ){
                $scope.$emit('showhint', '发送失败');
            }
            console.log(data);
        },function(){
            $scope.$emit('showhint', '发送失败');
        });
    };
    // $scope.getUserList();
    function select(element) {
        var selectedText;

        if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
            element.focus();
            element.setSelectionRange(0, element.value.length);

            selectedText = element.value;
        }
        else {
            if (element.hasAttribute('contenteditable')) {
                element.focus();
            }

            var selection = window.getSelection();
            var range = document.createRange();
            console.log(range);
            console.log(element);
            range.selectNodeContents(element);
            
            selection.removeAllRanges();
            selection.addRange(range);
//          selection.collapseToEnd();
            selection.collapseToStart();

            selectedText = selection.toString();
        }
        return selectedText;
    }
    
    var elem = document.getElementById('asdffd');
    $scope.sele = function()
    {
        var text = select(elem);
        console.log(text);
    };
    var a = 0;
    $scope.isShowEm = false;
    $scope.showEm = function(){
        var input = document.querySelector(".im-dialog-input");
        input.innerHTML = a;
        a++;
        // $scope.isShowEm = !$scope.isShowEm;
    };

    $scope.ems = imDialogFactory.ems;
    
    $scope.insertEm = function(index){
        var em = '<img src=\"img/em/'+index+'.gif\" /><span></span>';
        utilFactory.insertHtmlAtCaret(em);
    };
    var div = document.querySelector(".im-dialog-section");
    function updateMsgList(msg){
        $scope.msgList.push(msg);
        div.scrollTop = div.scrollHeight;
        $timeout(function(){},1);
        console.log(msg);
    }
// msgList
    $scope.$on('CHAT', function( event, data ){
        $scope.account = data.form;
        imDialogFactory.account = data.form;
        data.isMe = false;
        updateMsgList(data);
    });

    
}]);

});