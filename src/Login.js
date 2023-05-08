import React from 'react'

function Login() {
  return (
    <div>
        <div>
            <form>
                <div>
                    <label htmlFor="email"></label>
                    <input type="email" placeholder='Enter Email'/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" placeholder='Enter Email'/>
                </div>
                <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login