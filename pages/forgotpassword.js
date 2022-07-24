import React from 'react'

function Forgotpassword() {
  return (
    <div>
        <form >
            <div className="w-full md:w-1/2 px-3 mb-6 ">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Enter your Email
                </label>
                <input
                    // onChange={ handleLoginChange } value={loginInputs.firstName}
                    type='email' name="email" placeholder='Enter Email' required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
            </div>
            <div>
                <button className='border bg-blue-600 p-2 rounded-md text-white hover:bg-white hover:border-blue-600 hover:text-black'> Change password </button>
            </div>
        </form>
    </div>
  )
}

export default Forgotpassword