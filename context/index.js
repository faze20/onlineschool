import  { useState,useEffect ,  createContext } from "react";

import Cookies from 'js-cookie'
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import cookie from 'cookie'
import axios from 'axios';

const jwt = require('jsonwebtoken');
const JWT_SECRET = '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611'
import { useRouter } from "next/router"

export const Context = createContext();

export const ContextProvider = (props) => {
    const router = useRouter()
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState({id:'', firstName:'',userName:''})
    const [loginErrorMessage ,setloginErrorMessage] = useState('')
    const [registrationMessage ,setregistrationMessage] = useState('')
    const [loginInputs, setloginInputs] = useState({ email: '', password : ''});
    const [registerInputs, setregisterInputs] = useState({firstName:'',lastName:'',userName:'',state:'',city:'',zip:'', email: '', password : '',confirmPassword : '' });
    const clearRegMessage = ()=>{
        router.push('/login')
        setregistrationMessage('')

    }
    const handleLoginChange = (e) => setloginInputs({
        ...loginInputs,
        [e.currentTarget.name]: e.currentTarget.value
    }); 
    const handleRegisterChange = (e) => setregisterInputs({
        ...registerInputs,
        [e.currentTarget.name]: e.currentTarget.value
    }); 

    const loginSubmit = async (e)=>{ 
        e.preventDefault()
        const expireIN = new Date(new Date().getTime() + 2 * 60 * 1000);
        const userData = await axios.post('api/login' ,{ loginInputs } , {
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            withCredentials: true,
        } )
        const result = await userData.data
        if(typeof result.refreshToken === 'undefined' || result.refreshToken === null){
            console.log(result.message)
            setloginErrorMessage(result.message)
        }else{
            const decoded = jwt.verify(result.token, JWT_SECRET);
            sessionStorage.setItem('sessionToken', result.token)
            sessionStorage.setItem('user', decoded)
            // setCookie('rfreshtokken',result.refreshToken , { maxAge: 60 * 60 * 24, HttpOnly: true });

            // Cookies.set('refreshbacktoken', result.refreshToken, { expires: expireIN, path: '',  secure: true  })

            setUser( {id:decoded.id, firstName:decoded.firstName,userName:decoded.userName})
            setloginErrorMessage(result.message)
            setAuthenticated(true)
            console.log(result.token)
        }

    }

    const authorisedUser = async ()=>{
        const userAuth =  await axios.get('api/user')
        const result = await userAuth.data
        console.log(result.authenticated)

    }
    const logout = async ()=>{
        const loggedOut = await axios.get('api/logout')
        const result = await loggedOut.data
        console.log(result.authenticated)
        if(result.authenticated){
            sessionStorage.removeItem('sessionToken');
            sessionStorage.removeItem('user');
            Cookies.remove('refreshbacktoken' , { path: '' })
            setUser({id:'', firstName:'',userName:''})
        } else {
            alert('not logged out')
        }

        // router.reload()
    }

    const registerSubmit = async (e) => {
        e.preventDefault()
        if(registerInputs.password != registerInputs.confirmPassword){
            setregistrationMessage('Password mismatch!')
            return;
        }
        const registrationData = await axios.post('api/register' ,{ registerInputs } , {
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        } )
        const registeruser = await registrationData.data;
        setregistrationMessage(registeruser.message)
        setregisterInputs({firstName:'',lastName:'',userName:'',state:'',city:'',zip:'', email: '', password : '',confirmPassword : '' });
    }
    useEffect(() => {
        authorisedUser()
        if (sessionStorage.getItem('user')) {
            setUser({id:sessionStorage.getItem('user').id, firstName:sessionStorage.getItem('user').firstName,userName:sessionStorage.getItem('user').userName})

            setAuthenticated(true)
        } else {
            setAuthenticated(false)
        }

    }, [])


    const value = {
        loginInputs,
        registerInputs,
        handleLoginChange,
        handleRegisterChange,
        loginSubmit,
        registerSubmit,
        registrationMessage,
        clearRegMessage,
        loginErrorMessage,
        logout,
        authenticated,
        user
        }

    return (
        <Context.Provider  value ={value}>
            {props.children}
        </Context.Provider>
    ) 
}