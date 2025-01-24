import { logger } from "../src/application/logger.js";
import { web } from "../src/application/web.js";


web.listen(5000, () => {
    logger.info("server is running on port 5000")
})