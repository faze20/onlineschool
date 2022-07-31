import clientPromise from '../../data/mongodata';
import cookie from 'cookie'
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const handler = async (req , res) => {
    // const { email , password } = req.body.loginInputs ;
    try {
        const client = await clientPromise
        const db = client.db("academy")
        const emailExist = await db.collection("sdbytesacademy").find({email:req.body.loginInputs.email}).toArray()
        if(emailExist.length === 0 ){
            return res.json({
                message: 'Invalid credentials'
            })
        }
        if (!bcrypt.compareSync(req.body.loginInputs.password, emailExist[0].password)) {
            return res.json({
                message: 'Invalid credentialsP'
            })
        }

        const accessToken = jwt.sign({
            id: emailExist[0]._id,
        },  process.env.JWT_SECRET, {expiresIn: '900s'});

        if( typeof emailExist[0].refreshToken === 'undefined' || emailExist[0].refreshToken === null){
            const refreshToken = jwt.sign({
                id: emailExist[0]._id,
                userName:emailExist[0].userName,
            }, process.env.JWT_SECRET, {expiresIn: '1w'});
    
            await db.collection("sdbytesacademy").updateOne({email:req.body.loginInputs.email},
                {
                    $set:{
                        refreshToken:refreshToken,
                    }
            })
    
            res.setHeader('Set-Cookie',
            [
                cookie.serialize('accessToken', (accessToken), {
                //    httpOnly: true,
                    maxAge: 60 * 15,
                    path:'/',
                   secure: process.env.NODE_ENV !== 'development',
                   sameSite: 'strict',
                 }),
                 cookie.serialize('refreshToken', (refreshToken), {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24 * 3 ,
                    path:'/',
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: 'strict',
                  })
            ] );
            res.json({
                id:emailExist[0]._id,
                userName:emailExist[0].userName,
                message:'login sucessfull Atoken'
            });

        } else {
            res.setHeader('Set-Cookie',
            [
                cookie.serialize('accessToken', (accessToken), {
                //    httpOnly: true,
                   maxAge: 60 * 15,
                   path:'/',
                   secure: process.env.NODE_ENV !== 'development',
                   sameSite: 'strict',
                 }),
                 cookie.serialize('refreshToken', (emailExist[0].refreshToken), {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24 * 3 ,
                    path:'/',
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: 'strict',
                  })
            ] );
            res.json({
                id: emailExist[0]._id,
                userName:emailExist[0].userName,
                message:'login sucessfull Rtoken'
            });
        }
    } catch (error) {
        res.json({message:error.message})
    }
}

export default handler
