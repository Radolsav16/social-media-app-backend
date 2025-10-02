import dotenv from "dotenv";
import express, { Express } from "express";
import connectDatabase from "./config/databaseConnection";
import cors from "cors";
import initApp from "./config/express";
import router from "./config/Route";
dotenv.config();

const PORT = process.env.PORT || 3050;
const DATABASE_URI = process.env.DATABASE_URI || "";

const app: Express = express();

async function start() {
  try {
    await connectDatabase(DATABASE_URI);
    app.use(cors());
    initApp(app);
    app.use(router);
  } catch (error) {
    throw Error(`App can't run right now!`)
  }
}
start();

app.listen(PORT, () => console.log("Example app listening on port 3050!"));
