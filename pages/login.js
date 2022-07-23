import {  useContext  } from 'react';

function Login() {
  return (
    <div>
        <form id='create-course-form'
        //  onSubmit={onSubmit}
            className="w-full p-8">
            <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        // onChange={ handleChange } value={input.firstName}
                        type='text' name="firstName" placeholder='First Name' required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        // onChange={ handleChange } value={input.lastName}
                        type='text' name="lastName" placeholder='Last Name' required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
            </div>
            <button
                    type="submit"
                    className="text-white w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 duration-300 hover:tracking-[0.5em] font-medium rounded-lg text-2xl px-5 py-1.5 text-center mr-2 mb-2">
                    Submit
                </button>
        </form>
    </div>
  )
}

export default Login