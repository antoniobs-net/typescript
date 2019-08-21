/**
  * @Author                                 @Version        @Details
  * -------------------                    ------------     -------------------------------
  * Antonio Bueno <mail@antoniobs.net>     2019.08.21.1     Initial version, debugging VSCode + Console + Browser
  * Antonio Bueno <mail@antoniobs.net>     2019.08.21.2     Interface example
 */

 interface IApp {
  getVersion: () => void;
  getAuthor: () => void;
  getWebSite: () => void;
 }

 let someApp = {
  getVersion: () => console.log('TypeScript App v 1.0'),
  getAuthor: () => console.log('Antonio Bueno'),
  getWebSite: () => console.log('www.antoniobs.net')
 }


function RunOnWindows( app: IApp ) {
  console.log(`Running App ${app.getVersion()} - ${app.getAuthor()} - ${app.getWebSite()}`);
}


RunOnWindows( someApp );
