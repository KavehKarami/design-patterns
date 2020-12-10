/* NOTE import without Design Pattern:

import FancyLogger from './fancyLogger.js'
const logger = new FancyLogger()

*/

// REVIEW import with Singleton design pattern:
import logger from "./fancyLogger.js";

export default function logFirstImplementation() {
  logger.printLogCount();
  logger.log("First file");
  logger.printLogCount();
}
