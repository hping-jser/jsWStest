define(['angular', 'app'], function(angular, app){
    "use strict";
angular.module(app.name)
.factory('utilFactory', ['$state', '$location', 'consFactory',
function($state, $location, consFactory){
    var services = {};
    var sno = 0;
    services.gotoState = function(state, isReplace){
        if( isReplace ){
            $location.path('/'+state);
            $location.replace();
        }
        else{
            $state.go(state);
        }
        services.log('go to '+state);
    };

    /*
     * 打印日志
     * @param log 要打印的信息
     * @param cssStyle
     * @author q652463887
     */
    services.log = function(log, cssStyle){
        var str,
            logStyle = cssStyle || 'font-size:0.8rem;color:#0F92C5';
        if (!consFactory.isDebug) {
        	return;
        }
        str = '%c' + consFactory.appName + ' : ';
        if (isArray(log)||isObject(log)) {
            console.log(str + '[object Object] as follows', logStyle)
            console.log(log);
            return;
        }
        console.log(str + log, logStyle);
    };
    services.failedLog = function(log){
        services.log(log,consFactory.logStyle.FAILED);
    };
    services.successLog = function(log){
        services.log(log,consFactory.logStyle.SUCCESS);
    };

    /*
     * 判断数据类型
     * @param value
     * @author q652463887
     */
    function isBoolean (value) {
    	return "[object Boolean]" === Object.prototype.toString.call(value);
    }
    services.isBoolean = isBoolean;
    
    /* 是否为数组 */
    function isArray (value) {
    	return "[object Array]" === Object.prototype.toString.call(value);
    }
    services.isArray = isArray;
    
    /* 是否为对象 */
    function isObject (value) {
    	return "[object Object]" === Object.prototype.toString.call(value);
    }
    services.isObject = isObject;
    
    /* 是否为字符串 */
    function isString (value) {
    	return "[object String]" === Object.prototype.toString.call(value);
    }
    services.isString = isString;
    
    function isRealNaN (value) {
        return value !== value;
    }
    services.isNaN = isRealNaN;
    
    function isNumber (value) {
        return isRealNaN(value) ? false : "[object Number]" === Object.prototype.toString.call(value);
    }
    services.isNumber = isNumber;
    
    function isFunction (value) {
        return "[object Function]" === Object.prototype.toString.call(value);
    }
    services.isFunction = isFunction;
    
    function isDate (value) {
        return "[object Date]" === Object.prototype.toString.call(value);
    }
    services.isDate = isDate;
    
    function isRegExp (value) {
        return "[object RegExp]" === Object.prototype.toString.call(value);
    }
    services.isRegExp = isRegExp;
    
    /*
     * 判断非空
     * @param obj
     * @returns {boolean}
     */
    services.isEmpty = function(obj){
        if (obj === undefined || obj === null || new String(obj).trim() === ''){
            return true;
        } else {
            return false;
        }
    };
    
    services.insertHtmlAtCaret = function (html) {
    var sel, range;
    if (window.getSelection) {
      // IE9 and non-IE
      sel = window.getSelection();
      console.log(sel);
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();

        var el = document.createElement("i");
        el.innerHTML = html;
        var frag = document.createDocumentFragment(), node, 
        lastNode;
        while ((node = el.firstChild)) {
          lastNode = frag.appendChild(node);
        }
        range.insertNode(frag);
        if (lastNode) {
          range = range.cloneRange();
          range.setStartAfter(lastNode);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    } 
  };
/**
 * 判断非空
 * @param obj
 * @returns {boolean}
// */
//function isNotEmpty(obj) {
//return isEmpty(obj) ? false : true;
//}
/**
 * 获取字符串真实长度 汉字算两位
 * @param str
 * @returns {number}
 */
//var getRealLength = function (str) {
//return isEmpty(str) ? 0 : str.replace(/[^\x00-\xff]/g, "**").length;
//}
//var class2type = {}, toString = Object.prototype.toString;
//(function () {
//var typeArr = "Boolean,Number,String,Function,Array,Date,RegExp,Object".split(",");
//for (var i = 0; i < typeArr.length; i++) {
//  var name = typeArr[i];
//  class2type["[object " + name + "]"] = name.toLowerCase();
//}
//})()
///**
// * 判断参数类型
// * @param obj
// * @returns {string}
// */
//function type(obj) {
//return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
//}
/**
 * 判断参数是否为布尔类型
 * @param obj
 * @returns {boolean}
 */
//function isBoolean(obj) {
//return isEmpty(obj) ? false : type(obj) === 'boolean';
//}
/**
 * 判断参数是否为数字类型
 * @param obj
 * @returns {boolean}
 */
//function isNumeric(obj) {
//return isEmpty(obj) ? false : type(obj) === 'number';
//}
//function isString(obj) {
//return isEmpty(obj) ? false : type(obj) === 'string';
//}
//function isFunction(obj) {
//return isEmpty(obj) ? false : type(obj) === 'function';
//}
//function isArray(obj) {
//return isEmpty(obj) ? false : type(obj) === 'array';
//}
//function isDate(obj) {
//return isEmpty(obj) ? false : type(obj) === 'date';
//}
//function isRegExp(obj) {
//return isEmpty(obj) ? false : type(obj) === 'regexp';
//}
//function isObject(obj) {
//return isEmpty(obj) ? false : type(obj) === 'object';
//}
    
    return services;
}]);
});