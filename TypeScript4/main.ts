/**
  * @Author                                 @Version        @Details
  * -------------------                    ------------     -------------------------------
  * Antonio Bueno <mail@antoniobs.net>     2019.08.21       Class example
 */

 /**
  * App Class
  */
abstract class App {

  constructor(private _version: string, public author: string, web: string) {
  }

  set version(value: string) {
    this._version = value;
  }

  get version(): string {
    return this._version;
  }

  abstract Run(): void;

}

/**
 * Win32App class
 */
class Win32App extends App {
  constructor(_version: string, public author: string, web: string) {
    super(_version, author, web);
  }

  Run() {
    console.log(`Running Win32App - Version ${this.version} - ${this.author}`);
  }
}

/**
 * Unix App
 */
class UnixApp extends App {
  constructor(_version: string, public author: string, web: string) {
    super(_version, author, web);
  }

  Run() {
    console.log(`Running UnixApp - Version ${this.version} - ${this.author}`);
  }
}

let win32App: App = new Win32App("1.0", "Antonio Bueno", "www.antoniobs.net/win32app");
win32App.Run();

let unixApp: App = new UnixApp("1.1", "Antonio Bueno", "www.antoniobs.net/unixapp");
unixApp.Run();
