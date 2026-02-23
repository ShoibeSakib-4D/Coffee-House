import React, { use } from 'react'
import { AuthContext } from '../../context/AuthContext'

const SignIn = () => {
  
  const {userSignIn} = use(AuthContext)

  const handleSignIn = e =>{
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      console.log(email, password)

      //send to firebase for sign in
      userSignIn(email, password)
      .then(result => {console.log(result.user)
        
        const userSigninInfo = {
          email,
          lastSignInTime : result?.user?.metadata?.lastSignInTime
        }

        fetch("http://localhost:5000/users",{
          method : "PATCH",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify(userSigninInfo)
        }
      )
        .then(res=>res.json())
        .then(data => console.log("data after patch",data))

      })
      .catch(error => {console.log(error)})
  }

  return (
  <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignIn Now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">

        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <input  type='submit' className="btn btn-neutral mt-4" value="Login"></input>
        </form>

      </div>
    </div>
  </div>
</div>
  )
}

export default SignIn
