import cookie from "cookie";


const handler = async (req , res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    if(typeof cookies.refreshToken === 'undefined' || cookies.refreshToken === null){
        return res.json({message:'no user' })
    }
    try {
        res.setHeader('Set-Cookie', [
            cookie.serialize('accessToken', '', {
            maxAge:0,
            path: '/',
            }),
            cookie.serialize('refreshToken', '', {
            maxAge:0,
            path: '/',
            })
        ],)
        res.json({ message : 'logged out'});
    } catch (error) {
        return res.json({ message : error.message})
    }

}

export default handler ;