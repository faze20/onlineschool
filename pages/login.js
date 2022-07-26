import Link from 'next/link';
import {  useState,useEffect , useContext  } from 'react';
import {Context} from "../context";
import axios from 'axios';

const jwt = require('jsonwebtoken');
const JWT_SECRET = '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611'


function Login() {
    // const [loginErrorMessage ,setloginErrorMessage] = useState('')
    // const [authenticated, setAuthenticated] = useState(false)
    // const [user, setUser] = useState({id:'', firstName:'',userName:''})


    // const [loginInputs, setloginInputs] = useState({ email: '', password : ''});

    // const handleLoginChange = (e) => setloginInputs({
    //     ...loginInputs,
    //     [e.currentTarget.name]: e.currentTarget.value
    // }); 

    // const loginSubmit = async (e)=>{ 
    //     e.preventDefault()
    //     const expireIN = new Date(new Date().getTime() + 2 * 60 * 1000);
    //     const userData = await axios.post('api/login' ,{ loginInputs } , {
    //         headers: {
    //             Accept: "application/json, text/plain, */*",
    //             "Content-Type": "application/json"
    //         },
    //         withCredentials : true
    //     } )
    //     const result = await userData.data
    //     if(typeof result.refreshToken === 'undefined' || result.refreshToken === null){
    //         console.log(result.message)
    //         setloginErrorMessage(result.message)
    //     }else{
    //         const decoded = jwt.verify(result.token, JWT_SECRET);
    //         sessionStorage.setItem('sessionToken', result.token)
    //         sessionStorage.setItem('user', decoded)
            // Cookies.set('refreshbacktoken', result.refreshToken, { expires: expireIN, path: '',  secure: true  })
            // res.setHeader('Set-Cookie', cookie.serialize('name', String(result.refreshToken), {
            //     httpOnly: true,
            //     maxAge: 60 * 60 * 24 * 7 // 1 week
            //   }));
    //         setUser( {id:decoded.id, firstName:decoded.firstName,userName:decoded.userName})
    //         setloginErrorMessage(result.message)
    //         setAuthenticated(true)
    //         console.log(result.token)
    //     }

    // }
    const {loginInputs , handleLoginChange , loginSubmit ,loginErrorMessage } = useContext(Context);

  return (
    <div className='h-screen'>
        <form onSubmit={loginSubmit}>
            <div className="flex flex-col items-center mx-3 mt-12">
                <div className="w-full md:w-1/2 px-3 mb-6 ">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        onChange={ handleLoginChange } value={loginInputs.firstName}
                        type='email' name="email" placeholder='Enter Email' required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full md:w-1/2 mb-6 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        onChange={ handleLoginChange } value={loginInputs.lastName}
                        type='password' name="password" placeholder='Enter Password' required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                    <div className='flex items-center justify-between'>
                        {loginErrorMessage}
                        <Link href='/forgotpassword'>
                            <a className='text-xs italic text-gray-500 '> forgot password</a>
                        </Link>
                    </div>
                </div>
                <button
                type="submit"
                className="text-white w-full md:w-1/2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 duration-300 hover:tracking-[0.5em] font-medium rounded-lg text-2xl px-5 py-1.5 text-center mb-2">
                Submit
            </button>
            </div>
        </form>
    </div>
  )
}

export default Login