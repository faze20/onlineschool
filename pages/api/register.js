import clientPromise from '../../data/mongodata';

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const handler = async (req , res) => {
    if (req.body.input.password != req.body.input.confirmPassword) {
        res.json({message: 'Password Mismatch'})
    } else {
        try {
            const client = await clientPromise
            const db = client.db("sidehussleusers")
            const emailExist = await db.collection("sydusers").find({email:req.body.input.email}).toArray()
            if (emailExist[0].email === req.body.input.email){
                const usernameExist = await db.collection("sydusers").find({userName:req.body.input.userName}).toArray()
                if (usernameExist[0].userName === req.body.input.userName ) {
                    const hashPassword = bcrypt.hashSync(req.body.input.password, salt);
                    await db.collection("sydusers").insertOne({ 
                        firstname:req.body.input.firstName,
                        lastName: req.body.input.lastName,
                        userName:req.body.input.userName, 
                        email:req.body.input.email , 
                        password:hashPassword ,
                        state:req.body.input.state,
                        city:req.body.input.city, 
                        zip:req.body.input.zip,
                        role:'user',
                        messagesArrayList:[],
                        savedArrayList:[]
                    })
                    res.json({message: `Welcome ${req.body.input.userName}`})
                } else {
                    res.json({message:`Username ${req.body.input.userName} already taken`} )
                }
            }else {
                res.json({
                    message:`Email ${req.body.input.email} already taken`
                } )
            }
        } catch (error) {
            res.json({message: error})
        }
    }
}
    export default handler


    