import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const Users = () => {

  const [users, setUsers] = useState([])

console.log(users)

    useEffect(() => {
    fetch("http://localhost:5000/users")
        .then(res =>res.json())
        .then(data => setUsers(data))  
    } ,[])

const handleClick = (id) =>{
        console.log("Delete",id)
       
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {


    fetch(`http://localhost:5000/users/${id}`,{
      method : "DELETE",
    })
    .then(res => res.json())
    .then(data =>{
      if(data.deletedCount){

        const remainingUsers = users.filter(user => user._id !== id)
        setUsers(remainingUsers)

   Swal.fire({
    title: "Deleted!",
    text: "Your user has been deleted.",
    icon: "success"
    });
      }
    })

 
  }
});
    }
   
  return (
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>User E-Mail</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
  
  {
    users.map((user, index)=> 

            <tr key={user._id}>
        <th>
          <label>
            {index+1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user?.name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{user?.email}</td>
        <th className='flex flex-row gap-2'>
          <button className="btn btn-ghost btn-xs bg-blue-950">View</button>
          <button className="btn btn-ghost btn-xs bg-amber-500">Edit</button>
          <button onClick={() => handleClick(user._id)} className="btn btn-ghost btn-xs bg-blue-800">Delete</button>
        </th>
      </tr>
     
    )
  }
  
    </tbody>
    
  </table>
</div>
  )
}

export default Users
