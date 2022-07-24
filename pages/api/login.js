import clientPromise from '../../data/mongodata';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function generateAccessToken({username,state,city , role}) {
    return jwt.sign(
        {
           username,
           state,
           city,
           role,
          },
        process.env.JWT_SECRET, 
        { expiresIn: '86400s' }
    );
  }
const handler = async (req , res) => {
    if(req.method === 'POST'){
        try {
            const client = await clientPromise
            const db = client.db("academy")
            const emailExist = await db.collection("sdbytesacademy").find({email:req.body.loginInputs.email}).toArray()
            if(emailExist.length === 0 ){
                return res.status(400).json({
                    message: 'Invalid credentials'
                })
            }
            if (!bcrypt.compareSync(req.body.loginInputs.password, emailExist[0].password)) {
                return res.status(400).json({
                    message: 'Invalid credentials'
                })
            }
            const refreshToken = jwt.sign({
                id: emailExist[0]._id
            }, process.env.JWT_SECRET, {expiresIn: '1w'});

            const expired_at = new Date();
            const tokenLifespan = expired_at.setDate(expired_at.getDate() + 7);

            await db.collection("sdbytesacademy").updateOne({email:req.body.loginInputs.email},
                {
                    $set:{
                        refreshToken:refreshToken,
                        tokenLifespan:tokenLifespan
                    }
            })
            const token = jwt.sign({
                id: emailExist[0]._id
            },  process.env.JWT_SECRET, {expiresIn: '30s'});
            console.log(token)
        
            res.json({
                token,
                refreshToken
                
            });

        } catch (error) {
            res.json({message:error.message})
        }
    }
}
export default handler
