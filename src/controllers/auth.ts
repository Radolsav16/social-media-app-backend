import { Router } from "express";
import { signUp } from "../services/auth";

const authContoller = Router();


authContoller.post('/sign-up',async (req,res) =>{
    const {user,token} = await signUp(req.body)
    const data = {
    user: {
        id: user._id,
        name:user.name,
        email:user.email,
    },
    accessToken: token,
}
   
    res.send(JSON.stringify(data))
})


authContoller.post('/sign-in',(req,res)=>{
    const {email,password} = req.body;
    const data = {
        user:{
            email,
            password
        },
        accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mockToken123456"
    }

    res.send(JSON.stringify(data))

})




export default authContoller;