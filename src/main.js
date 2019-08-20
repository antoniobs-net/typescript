/// <reference path="./interfaces/AppInfo.ts" />
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
