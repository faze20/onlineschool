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
            if(userExist[0].email === req.body.input.email ){
                if(bcrypt.compareSync(req.body.input.password, userExist[0].password)){
                    const token = generateAccessToken({username:userExist[0].userName, city:userExist[0].city ,state:userExist[0].state, role:userExist[0].role })
                    res.json({token:token , messageCount:userExist[0].messagesArrayList.length , saved:userExist[0].savedArrayList.length})
                }else{
                    res.json({message:'Wrong password '})
                }
            }
            else {
                res.json({message:'Email not valid'})
            }

        } catch (error) {
            res.json({message:error.message})
        }
    }
}
export default handler
