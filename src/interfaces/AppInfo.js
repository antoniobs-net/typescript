/// <reference path="IAppInfo.ts" />
/**
 * Public App Class
 */
var AppInfo = /** @class */ (function () {
    function AppInfo() {
    }
    AppInfo.prototype.getVersion = function () {
        return '1.0';
    };
    AppInfo.prototype.getAuthor = function () {
        return 'Antonio Bueno';
    };
    AppInfo.prototype.getWebSite = function () {
        return 'www.antoniobs.net';
    };
    return AppInfo;
}());
