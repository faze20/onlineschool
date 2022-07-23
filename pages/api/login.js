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
            const db = client.db("sidehussleusers")
            const userExist = await db.collection("sydusers").find({email:req.body.input.email}).toArray()
            if(userExist[0].email != req.body.input.email ){
                return res.status(400).send({
                    message: 'Invalid credentials'
                })
            }
            if (!bcrypt.compareSync(req.body.input.password, userExist[0].password)) {
                return res.status(400).send({
                    message: 'Invalid credentials'
                })
            }
            const refreshToken = jwt.sign({
                id: userExist[0]._id
            }, process.env.JWT_SECRET, {expiresIn: '1w'});

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000 //7 days
            });
            const expired_at = new Date();
            const tokenLifespan = expired_at.setDate(expired_at.getDate() + 7);

            await db.collection("sydusers").updateOne({email:req.body.email},
                {
                    $set:{
                        refreshToken:refreshToken,
                        tokenLifespan:tokenLifespan
                    }
            })
            const token = jwt.sign({
                id: user.id
            },  process.env.JWT_SECRET, {expiresIn: '30s'});
        
            res.send({
                token
            });


            //     if(bcrypt.compareSync(req.body.input.password, userExist[0].password)){
            //         const token = generateAccessToken({username:userExist[0].userName, city:userExist[0].city ,state:userExist[0].state, role:userExist[0].role })
            //         res.json({token:token , messageCount:userExist[0].messagesArrayList.length , saved:userExist[0].savedArrayList.length})
            //     }else{
            //         res.json({message:'Wrong password '})
            //     }
            // }
            // else {
            //     res.json({message:'Email not valid'})
            // }

        } catch (error) {
            res.json({message:error.message})
        }
    }
}
export default handler
