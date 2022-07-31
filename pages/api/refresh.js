import cookie from "cookie";
const jwt = require('jsonwebtoken');

const handler = async (req , res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.accessToken , typeof(cookies.accessToken ) , "refresh api")
    if(typeof cookies.refreshToken === 'undefined' || cookies.refreshToken === null){
        return res.json({message:'no user' })
    }else {
        const decoded = jwt.verify(cookies.refreshToken, process.env.JWT_SECRET);
        const newAccessToken = jwt.sign({
            id: decoded._id,
            userName:decoded.userName,
        },  process.env.JWT_SECRET, {expiresIn: '900s'});

        res.setHeader('Set-Cookie', cookie.serialize('accessToken', (newAccessToken), {
            //    httpOnly: true,
               maxAge: 60 * 15,
               path:'/',
               secure: process.env.NODE_ENV !== 'development',
               sameSite: 'strict',
             }),)

        res.json({
            id: decoded._id,
            userName:decoded.userName,
            message:'refresh api'
        });
    }
}

export default handler ;