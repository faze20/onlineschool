import cookie from "cookie";


const handler = async (req , res) => {
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