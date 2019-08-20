/**
 * Public App Interface
 */
interface IAppInfo {
    getVersion(): string;
    getAuthor(): string;
    getWebSite(): string;
}

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


window.onload = function () {

    let App = new AppInfo();
    var div = document.createElement('div');
    div.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:grey';

    let input = document.createElement("input");
    input.type = "text";
    input.name = "author";
    input.value = App.getAuthor();

    div.appendChild(input);
    document.body.appendChild(div);
}
