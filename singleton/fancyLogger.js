// REVIEW with Singleton Design Pattern:
class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const logger = new FancyLogger();
Object.freeze(logger);
export default logger;

// NOTE without Design Pattern :
// export default class FancyLogger {
//   constructor() {
//     this.logs = [];
//   }

//   log(message) {
//     this.logs.push(message);
//     console.log(`FANCY: ${message}`);
//   }

//   printLogCount() {
//     console.log(`${this.logs.length} Logs`);
//   }
// }
