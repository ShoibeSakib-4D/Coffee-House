import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const EditCoffee = () => {
  const {id} = useParams()

    const [editCoffee, setEditCoffee] = useState(null)


    useEffect(()=>{
        fetch(`http://localhost:5000/newCoffees/${id}`)
        .then(res=>res.json())
        .then(data =>{setEditCoffee(data)})
    },[id])

    const handleFormSubmit = e =>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form)
        const updatedCoffeeData = Object.fromEntries(formData.entries())
        console.log(updatedCoffeeData)

        fetch(`http://localhost:5000/newCoffees/${id}`,{
            method:"PUT",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify(updatedCoffeeData)
        })
        .then(res=>res.json())
        .then(data =>{

            if(data.modifiedCount)
            {
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

            }
        })
    }
   

  return (
 

   <div className='p-10'>
        <div className='p-10 text-center'> 

      <h4 className='font-bold text-5xl p-3'>
        Edit Your Coffee Here
      </h4>
     
    </div>

    <div className='my-10'>
<form onSubmit={handleFormSubmit} className=''> 

<div className='grid grid-cols-1 mid:grid-cols-2 lg:grid-cols-2 gap-4'>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Name</label>
  <input name='name' type="text" className="input w-full" defaultValue={editCoffee?.name} placeholder="Enter the name of the coffee 1" />
</fieldset>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Chief</label>
  <input name='chief' type="text" className="input w-full" defaultValue={editCoffee?.chief} placeholder="Enter the chief name 2" />
</fieldset>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Supplier</label>
  <input name='supplier' type="text" className="input w-full" defaultValue={editCoffee?.supplier} placeholder="Enter the supplier name 3" />
</fieldset>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Taste</label>
  <input name='taste' type="text" className="input w-full" defaultValue={editCoffee?.taste} placeholder="Say something about the taste 4" />
</fieldset>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Price in USD</label>
  <input name='price' type="text" className="input w-full" defaultValue={editCoffee?.price} placeholder="Enter the price in USD" />
</fieldset>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Details</label>
  <input name='details' type="text" className="input w-full" defaultValue={editCoffee?.details} placeholder="Enter Dertails 6" />
</fieldset>

</div>

<div className='my-5'>
       <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Photo</label>
  <input name='addPhoto' type="text" className="input w-full" defaultValue={editCoffee?.addPhoto} placeholder="Photo URL 7" />
</fieldset>
</div>


    <input className='btn w-full' type="submit"  value="Edit Coffee" />
</form>
    </div>
</div>
  )
}

export default EditCoffee
