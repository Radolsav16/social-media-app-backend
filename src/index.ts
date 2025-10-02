import dotenv from 'dotenv'
import express,{Express,Request,Response} from 'express'
import connectDatabase from './config/databaseConnection';
// import initApp from './config/express';
import cors from 'cors';
// import router from './config/Route';
dotenv.config()

const PORT = process.env.PORT || 3050;
const DATABASE_URI = process.env.DATABASE_URI || '';

const app:Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get("/home", (req: Request, res: Response) => {
    console.log(req)
  res.send('Hello Home!')
});



async function start(){
    try {
    await connectDatabase(DATABASE_URI);
    app.listen(PORT,()=>console.log(`App is running on PORT ${PORT}`))
    } catch (error) {
        console.log(error)
    }
   
}
start()


app.listen(3050, () => {
    console.log('Example app listening on port 3050!');
    }
);





