import { User } from "../models/User"

export const signUp = async ({name,email,password}) => {
    const user = await User.create({name,email,password})
    return user;
}