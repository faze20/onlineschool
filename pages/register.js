import { useContext  } from 'react';
import {Context} from "../context";

function Register() {
    const {registerInputs , handleRegisterChange , registerSubmit,registrationMessage , clearRegMessage } = useContext(Context);

  return (
    <div className='relative h-screen'>
        {registrationMessage.charAt(0) === 'W' ?
            <div className='absolute top-32 h-1/2  bg-slate-100 right-0 left-0  flex items-center justify-center p-4'>
                <div className='bg-red-100 p-4 rounded text-center'>
                    <h3 className='mb-4 font-semibold text-4xl'>{registrationMessage} !!!</h3>
                    <div 
                    onClick={clearRegMessage}
                    >
                        <a className="border border-green-300 p-2 rounded mt-4 text-center mr-2 mb-2 hover:bg-green-300 hover:text-gray-500 cursor-pointer">
                            You are succesfully registered  click to continue !!!
                        </a>
                    </div>
                </div>
            </div>
            :
        
    
        <div>
            <form id='create-course-form'
             onSubmit={registerSubmit}
              className="w-full p-8">
                <div className="flex flex-wrap -mx-3 mb-1">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            onChange={ handleRegisterChange } value={registerInputs.firstName}
                            type='text' name="firstName" placeholder='First Name' required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            onChange={ handleRegisterChange } value={registerInputs.lastName}
                            type='text' name="lastName" placeholder='Last Name' required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="userName">
                            username
                        </label>
                        <input
                            onChange={ handleRegisterChange } value={registerInputs.userName}
                            type='text' name="userName" placeholder='username' required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                        {registrationMessage.charAt(0) === 'U'  &&  
                          <p className="text-red-500 text-xs italic"> {registerInputs.userName} is already taken !!!  </p>
                        }
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={ handleRegisterChange } value={registerInputs.email}
                            type='email' name="email" placeholder='Enter your Email' required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                        {registrationMessage.charAt(0) === 'E'  &&  
                        <p className="text-red-500 text-xs italic"> {registerInputs.email} is already taken !!!  </p>
                        }
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={ handleRegisterChange } value={registerInputs.password}
                            type='password' name="password" placeholder='*****' required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                        {registrationMessage.charAt(0) === 'P'  &&  
                        <p className="text-red-500 text-xs italic">{registrationMessage}</p>
                        }
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                    onChange={ handleRegisterChange } value={registerInputs.confirmPassword}
                    type='password' name="confirmPassword" placeholder='*****' required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                           onChange={ handleRegisterChange } value={registerInputs.city}
                            type='text' name="city" placeholder='City' required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                        <p className="text-red-500 text-xs italic"> 
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state">
                            State
                        </label>
                        <input
                           onChange={ handleRegisterChange } value={registerInputs.state}
                            type='text' name="state" placeholder='State' required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                        <p className="text-red-500 text-xs italic"> 
                        </p>
                    </div>
                    
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="zip">
                            Zip
                        </label>
                        <input
                           onChange={ handleRegisterChange } value={registerInputs.zip}
                            type='text' name="zip" placeholder='Zip' required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                        <p className="text-red-500 text-xs italic">
                        </p>
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 duration-300 hover:tracking-[0.5em] font-medium rounded-lg text-2xl px-5 py-1.5 text-center mr-2 mb-2">
                    Submit
                </button>
            </form>
        </div>
           }
    </div>
  )
}

export default Register