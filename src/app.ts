import express from "express";
import config from "config";
import cors from "cors";
import logger from "./utils/logger";



// const port = config.get<number>("port");

const app = express();


app.use(
  cors({})
);
app.use(express.json());

app.listen(3000, async () => {
    logger.info(
      `App is running at http://localhost:3000 `
    );
});
