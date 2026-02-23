import React from 'react'
import { MdDelete, MdEdit, MdPreview } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const NewCoffeeCard = ({coffee, coffees, setCoffeess}) => {
    const {_id, name,addPhoto,chief, price} = coffee;

    const handleDelete = (_id) =>{
         console.log(_id)

         Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed)
  if (result.isConfirmed) {

    fetch(`http://localhost:5000/newCoffees/${_id}`,{
        method : 'DELETE',
    })
    .then(res => res.json())
    .then(data =>{console.log(data)

        if(data.deletedCount)
        { 
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

    const remainingCoffees = coffees.filter(
        coffee => coffee._id !== _id
    )
    setCoffeess(remainingCoffees)
        }
    })

  }
});
    }

  return (
 <div className=" bg-base-200 rounded-2xl">
    
  <div className="hero-content flex-col lg:flex-row justify-between">
   
    <img
      src={addPhoto}
      className="max-w-sm shadow-2xl rounded-2xl"
    />

    <div className=' w-full flex justify-between '>

  <div>
        <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">
       Chief: {chief}
      </p>
        <p>Price: ${price}</p>
  </div>

     <div>
        <div className="join join-vertical lg:py-3 flex-col gap-2">

 <Link to={`/coffee/${_id}`}>
  <button className="btn join-item text-3xl bg-amber-900"><MdPreview />
</button>
 </Link>

<Link to = {`/editCoffee/${_id}`}>
  <button className="btn join-item text-3xl bg-amber-900"><MdEdit />
</button>
</Link>

  <button onClick={()=>{handleDelete(_id)}} className="btn join-item text-3xl bg-amber-900"><MdDelete /></button>
</div>
     </div>

    </div>

  </div>

</div>
  )
}

export default NewCoffeeCard
