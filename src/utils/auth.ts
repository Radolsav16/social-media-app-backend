import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '..';




export const generateToken = (payload) => {
    const token = jwt.sign(payload,JWT_SECRET,{expiresIn:'1h'});
    return token;
}


export const verifyToken = (token,email) => {
    const decoded = jwt.verify(token,JWT_SECRET);
    return decoded.email == email;
}