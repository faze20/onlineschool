import cookie from "cookie";


const handler = async (req , res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.nameToken , typeof(cookies.nameToken ))
    if(typeof cookies.nameToken === 'undefined' || cookies.nameToken === null){
        return res.json({authenticated : false })
    }
    res.json({ authenticated: true})
    
}

export default handler ;