import { User } from "../models/User"
import { generateToken } from "../utils/auth";

export const signUp = async ({name,email,password}) => {
    const user = await User.create({name,email,password})
    const token = generateToken({email:user.email})
    return {user,token};
}