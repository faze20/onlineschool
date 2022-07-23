import clientPromise from '../../data/mongodata';

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const handler = async (req , res) => {
    try {
        const client = await clientPromise
        const db = client.db("academy")
        const emailExist = await db.collection("sdbytesacademy").find({email:req.body.registerInputs.email}).toArray()
        const usernameExist = await db.collection("sdbytesacademy").find({userName:req.body.registerInputs.userName}).toArray()

        if (emailExist.length >= 1) {
            return res.json({
                message:`Email ${req.body.registerInputs.email} already taken`
            } )
        }
        if (usernameExist.length >= 1) {
            return res.json({
                message:`Username ${req.body.registerInputs.userName} already taken`
            } )
        }
        const hashPassword = bcrypt.hashSync(req.body.registerInputs.password, salt);
        await db.collection("sdbytesacademy").insertOne({ 
            firstName:req.body.registerInputs.firstName,
            lastName: req.body.registerInputs.lastName,
            userName:req.body.registerInputs.userName, 
            email:req.body.registerInputs.email , 
            password:hashPassword ,
            state:req.body.registerInputs.state,
            city:req.body.registerInputs.city, 
            zip:req.body.registerInputs.zip,
            messagesArrayList:[],
            age:'',
            grade:'',
            class:'',
            studyTime:'',
            profilePhoto:'',
            gender:''
        })
        return res.json({
            message: `Welcome ${req.body.registerInputs.userName}`
        } )
    } catch (error) {
        res.json({message: error})
    }
}
    export default handler


    