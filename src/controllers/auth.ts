import { Router } from "express";

const authContoller = Router();


authContoller.post('/sign-up',(req,res) =>{
    const {name,email,password} = req.body;
    

    const data = {
    user: {
        id: "u12345",
        name,
        email,
        bio: "Frontend developer & coffee lover ☕",
    },
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mockToken123456",
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