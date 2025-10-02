import mongoose from "mongoose";


export default async function connectDatabase(uri:string){
    try {
       await mongoose.connect(uri)
       console.log('Database is succesfully connected!')
    } catch (err) {
        console.log('Database is not connected!');
        console.log(err);
    }
    
}

