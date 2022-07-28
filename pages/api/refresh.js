import cookie from "cookie";
import clientPromise from '../../data/mongodata';



const handler = async (req , res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.accessToken , typeof(cookies.accessToken ) , "refresh api")
    if(typeof cookies.refreshToken === 'undefined' || cookies.refreshToken === null){
        return res.json({message:'no user' })
    }

    res.json({
        refeshTokenLifespan : 50,
        accessTokenLifespan : 20,
        token :cookies.accessToken ,
        userName:'emmanuel',
        message:'refresh api'
    });
    
    // try {
    //     const client = await clientPromise
    //     const db = client.db("academy")
    //     const refreshTokenExist = await db.collection("sdbytesacademy").find({refreshToken:cookies.refreshToken}).toArray()
    //     if( typeof refreshTokenExist[0].refreshToken === 'undefined' || refreshTokenExist[0].refreshToken === null){
    //         return res.json({message:'no user' })
    //         } else {
    //             res.json({
    //                 refeshTokenLifespan : 50,
    //                 accessTokenLifespan : 20,
    //                 token :cookies.accessToken ,
    //                 userName:'emmanuel',
    //                 message:'refresh api'
    //             });
    //         }
    // } catch (error) {
    //     res.json({message: error.message})
    // }
}

export default handler ;