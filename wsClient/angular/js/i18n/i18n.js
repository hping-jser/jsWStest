define(['angular', 'i18n/ch', 'i18n/en'], function(angular, ch, en){
    "use strict";
    return angular.module('i18n',['pascalprecht.translate'])
    .config(['$translateProvider', function($translateProvider){
        $translateProvider.translations('ch', ch);
        $translateProvider.preferredLanguage('ch');
        $translateProvider.useSanitizeValueStrategy('eee'); // 为何这么做？ 不知道
    }]);
});