import cookie from "cookie";


const handler = async (req , res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    if(typeof cookies.nameToken === 'undefined' || cookies.nameToken === null){
        return  res.json({ authenticated: false})
    }
    // res.setHeader('Set-Cookie', 'nameToken; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');
    
        /* remove cookies from request header */
        res.setHeader('Set-Cookie', [
          cookie.serialize('nameToken', '', {
            maxAge: -1,
            path: '/',
          })
        ]);
      
        // res.writeHead(302, { Location: '/api/user' });
        res.json({ authenticated: true });
    
}

export default handler ;