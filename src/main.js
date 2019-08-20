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
window.onload = function () {
    var App = new AppInfo();
    var div = document.createElement('div');
    div.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:grey';
    var input = document.createElement("input");
    input.type = "text";
    input.name = "author";
    input.value = App.getAuthor();
    div.appendChild(input);
    document.body.appendChild(div);
};
