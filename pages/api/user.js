import cookie from "cookie";


const handler = async (req , res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.accessToken , typeof(cookies.accessToken ))
    if(typeof cookies.accessToken === 'undefined' || cookies.accessToken === null){
        return res.json({authenticated : false })
    }
    res.json({ authenticated: true})
    
}

export default handler ;