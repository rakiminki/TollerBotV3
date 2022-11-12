export namespace Log {
  export class Logger {
    public static log(message: string, loggingtype: Loggingtypes = Loggingtypes.NORMAL) {
      console.log(
        `[${new Date().toLocaleDateString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}] ${loggingtype.toString()}: ${message}`
      );
    }
  }
  export enum Loggingtypes {
    NORMAL = "Normal",
    BUILD = "Build",
    ERROR = "Error",
    DEBUG = "Debug",
  }
}
