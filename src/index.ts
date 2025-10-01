import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config()

const app = express();
app.use(express.json())
app.use(cors());
const PORT = process.env.PORT || 3030;

app.get('/',(req,res)=>{
    res.send('Hello world!')
})





app.listen(PORT,()=>console.log(`App is running on PORT ${PORT}`))