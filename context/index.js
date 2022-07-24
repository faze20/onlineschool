import  { useState,useEffect ,  createContext } from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

import axios from 'axios';

const jwt = require('jsonwebtoken');
const JWT_SECRET = '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611'
import { useRouter } from "next/router"

export const Context = createContext();

export const ContextProvider = (props) => {
    const router = useRouter()
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
        const userData = await axios.post('api/login' ,{ loginInputs } , {
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        } )
        const result = await userData.data
        if(result.message){
            console.log(result.message)
            return setloginErrorMessage(result.message)
        }
        console.log(result)
        try {
            const decoded = jwt.verify(result.token, JWT_SECRET);
            setCookie('refreshToken', result.refreshTToken, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000 //7 days
            });
            console.log(decoded)
            // setloginErrorMessage(result.message)
        } catch (error) {
            console.log(error)
        }
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


    const value = {
        loginInputs,
        registerInputs,
        handleLoginChange,
        handleRegisterChange,
        loginSubmit,
        registerSubmit,
        registrationMessage,
        clearRegMessage
        }

    return (
        <Context.Provider  value ={value}>
            {props.children}
        </Context.Provider>
    ) 
}