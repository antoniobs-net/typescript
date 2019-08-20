
/// <reference path="IAppInfo.ts" />

/**
 * Public App Class
 */
class AppInfo implements IAppInfo {
    getVersion(): string {
        return '1.0';
    }
    getAuthor(): string {
        return 'Antonio Bueno';
    }
    getWebSite(): string {
        return 'www.antoniobs.net';
    }
}