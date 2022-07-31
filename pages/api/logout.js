import cookie from "cookie";
import clientPromise from '../../data/mongodata';

const handler = async (req , res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    if(typeof cookies.refreshToken === 'undefined' || cookies.refreshToken === null){
        return res.json({message:'no user' })
    }
    try {
        const client = await clientPromise
        const db = client.db("academy")
        await db.collection("sdbytesacademy").updateOne({refreshToken:cookies.refreshToken },
            {
                $unset:{
                    refreshToken:null,
                }
        })
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