import Link from 'next/link';
import {  useContext  } from 'react';
import {Context} from "../context";


function Login() {
    const {loginInputs , handleLoginChange , loginSubmit } = useContext(Context);

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
                    <div className='text-right'>
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