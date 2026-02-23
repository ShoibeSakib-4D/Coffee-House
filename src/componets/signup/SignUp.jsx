import React, { use } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { CgKey } from 'react-icons/cg'
import Swal from 'sweetalert2'

const SignUp = () => {

    const {createUser} = use(AuthContext)
    console.log(createUser)

    const handleSignUp = e =>{
        e.preventDefault()

        const form = e.target;
         const formData = new FormData(form)

        const {email, password, ...userProfile} = Object.fromEntries(formData.entries())
       
        console.log(email, password, userProfile)
        // function er moddhe eamil r password pathae dilam
        createUser(email, password)
        .then(result =>{
          console.log(result.user)

           const usersProfile= {email,
            
            creationTime : result?.user?.metadata?.creationTime,
            lastLoginAt :  result?.user?.metadata?.lastLoginAt,
            lastSignInTime:  result?.user?.metadata?.lastSignInTime,

            ...userProfile}
          
      
        fetch('http://localhost:5000/users',{
          method : "POST",
          headers :{ "Content-Type" : "application/json"},
          body : JSON.stringify(usersProfile)
        })
        .then(res=>res.json())
         .then(data => {
          
          console.log("Data after save user info",data)

          if(data.acknowledged)
          {

            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your account has been created",
  showConfirmButton: false,
  timer: 1500,
});

e.target.reset()

          }
         })
      
      } 

      )
        .catch(error=>{
            console.log(error)
        })
    }  
 
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUP Now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">

        <form onSubmit={handleSignUp} className="fieldset">



          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />

          
          <label className="label">Address</label>
          <input type="text" name='address' className="input" placeholder="Adress" />

          
          <label className="label">Phone</label>
          <input type="text" name='phone' className="input" placeholder="Phone" />

          
          <label className="label">Photo URL</label>
          <input type="text" name='email' className="input" placeholder="Photo URL" />

          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>

          <input type='submit' value='SignUP' className="btn btn-neutral mt-4"/>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default SignUp
