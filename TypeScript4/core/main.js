"use strict";
/**
  * @Author                                 @Version        @Details
  * -------------------                    ------------     -------------------------------
  * Antonio Bueno <mail@antoniobs.net>     2019.08.21       Class example
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * App Class
 */
var App = /** @class */ (function () {
    function App(_version, author, web) {
        this._version = _version;
        this.author = author;
    }
    Object.defineProperty(App.prototype, "version", {
        get: function () {
            return this._version;
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: true,
        configurable: true
    });
    return App;
}());
/**
 * Win32App class
 */
var Win32App = /** @class */ (function (_super) {
    __extends(Win32App, _super);
    function Win32App(_version, author, web) {
        var _this = _super.call(this, _version, author, web) || this;
        _this.author = author;
        return _this;
    }
    Win32App.prototype.Run = function () {
        console.log("Running Win32App - Version " + this.version + " - " + this.author);
    };
    return Win32App;
}(App));
/**
 * Unix App
 */
var UnixApp = /** @class */ (function (_super) {
    __extends(UnixApp, _super);
    function UnixApp(_version, author, web) {
        var _this = _super.call(this, _version, author, web) || this;
        _this.author = author;
        return _this;
    }
    UnixApp.prototype.Run = function () {
        console.log("Running UnixApp - Version " + this.version + " - " + this.author);
    };
    return UnixApp;
}(App));
var win32App = new Win32App("1.0", "Antonio Bueno", "www.antoniobs.net/win32app");
win32App.Run();
var unixApp = new UnixApp("1.1", "Antonio Bueno", "www.antoniobs.net/unixapp");
unixApp.Run();
//# sourceMappingURL=main.js.map