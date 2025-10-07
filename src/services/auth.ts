import { User } from "../models/User"
import { generateToken } from "../utils/auth";
import { AppError } from "../utils/error";
import { hashPassword } from "../utils/hash";

export const signUp = async ({name,email,password}) => {
    const isUser = await User.findOne({email})  

    if(isUser){
         throw new AppError('User with this email exist!',409);
    }
    const hashedPassword = await hashPassword(password)
    const user = await User.create({name,email,password:hashedPassword})
    const token = generateToken({email:user.email})
    return {user,token};
}