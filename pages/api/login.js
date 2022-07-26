// import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../data/mongodata';
import cookie from 'cookie'
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


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
        const token = jwt.sign({
            id: emailExist[0]._id,
            userName:emailExist[0].userName,
            firstName:emailExist[0].firstName
        },  process.env.JWT_SECRET, {expiresIn: '30s'});
        res.setHeader('Set-Cookie', cookie.serialize('nameToken', (token), {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7 // 1 week
        }));

        if( typeof emailExist[0].refreshToken === 'undefined' || emailExist[0].refreshToken === null){
            const refreshToken = jwt.sign({
                id: emailExist[0]._id,
                userName:emailExist[0].userName,
                firstName:emailExist[0].firstName
            }, process.env.JWT_SECRET, {expiresIn: '1w'});

            const expired_at = new Date();
            const tokenLifespan = expired_at.setDate(expired_at.getDate() + 7);
            setCookie('rfreshtokken',refreshToken , { maxAge: 60 * 60 * 24, httpOnly:true });
            // res.setHeader('Set-Cookie', cookie.serialize('nameToken', String(result.refreshToken), {
            //     httpOnly: true,
            //     maxAge: 60 * 60 * 24 * 7 // 1 week
            // }));
            await db.collection("sdbytesacademy").updateOne({email:req.body.loginInputs.email},
                {
                    $set:{
                        refreshToken:refreshToken,
                        tokenLifespan:tokenLifespan
                    }
            })
            res.json({
                token,
                refreshToken,
                message:'login sucess with fresh token'
            });
        }else {

            res.json({
                token,
                refreshToken:emailExist[0].refreshToken,
                message:'login sucess with old token'
            });
        }
    } catch (error) {
        res.json({message:error.message})
    }
}

export default handler
