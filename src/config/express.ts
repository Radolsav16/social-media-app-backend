import express,{Express} from 'express'




export default function initApp(app:Express){
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
}