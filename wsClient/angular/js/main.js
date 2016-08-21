require.config({
	baseUrl: 'js',
	/* 加载等待时间 */
	waitSeconds: 1,
	paths: {
        // 引入第三方库
        angular: '../libs/js/angular/angular',
        angularAnimate: '../libs/js/angular/angular-animate',
        angularResource: '../libs/js/angular/angular-resource',
        angularSanitize: '../libs/js/angular/angular-sanitize',
        uiRouter: '../libs/js/angular/angular-ui-router',
        angularTranslate: '../libs/js/angular/angular-translate',
        app: 'app',

        // 公共服务
        constantFactory: 'common/constant-services',
        utilFactory: 'common/util-services',
        commonFactory: 'common/common-services',
        emulatorFactory: 'common/emulator-services',
    },
	shim: {
		angular: {
			exports: 'angular'
		},
		angularAnimate: {deps: ['angular']},
		angularResource: {deps: ['angular']},
		angularSanitize: {deps: ['angular']},
		angularTranslate: {deps: ['angular']},
		uiRouter: {deps: ['angular']},
		utilFactory: {deps: ['constantFactory']},
		commonFactory: {deps: ['angular', 'utilFactory']},
        app: {deps: ['angular', 'angularAnimate', 'angularTranslate','angularResource', 'angularSanitize', 'uiRouter']},
	},
	priority: ['angular']
});

require(['angular', 'app', 'uiRouter','app-ctrl', 'app-routes', 'i18n/i18n',
         'emulatorFactory',
         'commonFactory',
         'login/login-ctrl',
         'imDialog/imDialog-ctrl'
         
],function(angular,app){
    angular.element(document).ready(function(){
        angular.bootstrap(document, [app.name]);
    });
});