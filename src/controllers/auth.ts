import { Router } from "express";
import { signIn, signUp } from "../services/auth";

const authContoller = Router();


authContoller.post('/sign-up',async (req,res,next) =>{
    try {
    const {user,token} = await signUp(req.body)
    const data = {
    user: {
        id: user._id,
        name:user.name,
        email:user.email,
    },
    accessToken: token,
}
   
    res.send(JSON.stringify({...data,message:'Succesfully sign up for Social!🎉'}))
    } catch (error) {
        next(error);
    }
})


authContoller.post('/sign-in',async (req,res)=>{
    const {user,token} = await signIn(req.body)
    const data = {
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        },
        accessToken:token
    }

    res.send(JSON.stringify({...data,message:'Succesfully sign in for Social!🎉'}))

})




export default authContoller;