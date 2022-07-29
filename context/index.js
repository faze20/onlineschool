import  { useState,useEffect ,  createContext, useRef } from "react";

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
    let [user, setUser] = useState({refeshTokenLifespan:'', accessTokenLifespan:'',userName:'', userToken:''})
    let [authTokens, setAuthTokens] = useState(()=>getCookie('accessToken') ? getCookie('accessToken')  : null )
    let [loading, setLoading] = useState(true)
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
            },
            withCredentials: true,
        } )
        const result = await userData.data
        console.log(result)
        if(typeof result.userName === 'undefined' || result.userName === null){
            setloginErrorMessage("Unable to sign in Try again")
        }else{
            setAuthTokens(result.token)
            sessionStorage.setItem('accessTokenLifespan', result.accessTokenLifespan)
            sessionStorage.setItem('userName', result.userName)
            sessionStorage.setItem('accessToken', result.token)

            sessionStorage.setItem('refeshTokenLifespan', result.refeshTokenLifespan)
            setUser( {refeshTokenLifespan:result.refeshTokenLifespan, accessTokenLifespan:result.accessTokenLifespan,userName:result.userName, userToken:result.token})
            setloginErrorMessage(result.message)
            console.log(result.accessTokenLifespan)
            router.push('/')
        }

    }

    const authorisedUser = async ()=>{
        const userAuth =  await axios.get('api/user')
        const result = await userAuth.data

        console.log(result.authenticated)

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

    const logout = async ()=>{
        const loggedOut = await axios.get('api/logout')
        const result = await loggedOut.data
        if(result.message === 'logged out'){
            sessionStorage.removeItem('accessTokenLifespan');
            sessionStorage.removeItem('refeshTokenLifespan');
            sessionStorage.removeItem('userName');
            setAuthTokens(null)
            setUser({refeshTokenLifespan:'', accessTokenLifespan:'',userName:''})
            router.back()
        } else {
           console.log(result.message)
        }
    }

    let updateToken = async ()=> {
        console.log("update token called")
        const userData = await axios.get('api/refresh' , {
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            withCredentials: true,
        } )

        const result = await userData.data
        
        if (result.message === 'refresh api'){
            setAuthTokens(result.token)
            setUser( {refeshTokenLifespan:result.refeshTokenLifespan, accessTokenLifespan:result.accessTokenLifespan,userName:result.userName, userToken:result.token})
            localStorage.setItem('authTokens', JSON.stringify(result.refeshTokenLifespan))
        }else{
            logout()
        }

        if(loading){
            setLoading(false)
        }
    }

    useEffect(() => {
        if(loading){
            updateToken()
        }
        let fourMinutes = 1000 * 60 * 4
        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
                console.log("useeffect ran one more time")
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)
    }, [authTokens , loading])

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
        user
        }

    return (
        <Context.Provider  value ={value}>
            { loading ? null : props.children}
        </Context.Provider>
    ) 
}