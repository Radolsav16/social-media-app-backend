import dotenv from "dotenv";
import express, { Express } from "express";
import connectDatabase from "./config/databaseConnection";
import cors from "cors";
import initApp from "./config/express";
import router from "./config/Route";
dotenv.config();

const PORT = process.env.PORT || 3050;
const DATABASE_URI = process.env.DATABASE_URI || "";
export const JWT_SECRET = process.env.JWT_SECRET
const app: Express = express();

async function start() {
    await connectDatabase(DATABASE_URI);
    app.use(cors());
    initApp(app);
    app.use(router);
    app.use((error,req,res,next)=>{
      console.log(error);
      const status = error.statusCode || 500;
      const message = error.message || 'Internal server error!';
      res.status(status).json({
        message
      })
      
    })
}
start();

app.listen(PORT, () => console.log("Example app listening on port 3050!"));
