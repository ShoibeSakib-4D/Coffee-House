import React from 'react'
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleFormSubmit = e =>{
        e.preventDefault()

        const toGetData = e.target;
        const formData = new FormData(toGetData);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee)

        //POST in db, means, send new coffee details is the DB
        fetch('http://localhost:5000/newCoffees',{

          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify(newCoffee),

        })
        .then(res => res.json())
        .then(data => {
          if(data.acknowledged){
           
            Swal.fire({
  title: "Coffee Added Successfully!",
  icon: "success",
  draggable: true
});
 e.target.reset()
          }
          "after adding data in the db from the application",console.log(data)})
        
    }

  return (
<div className='p-28'>
        <div className='p-20 text-center'> 

      <h4 className='font-bold text-5xl'>
        Add New Coffee
      </h4>
      <p>
        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
      </p>
    </div>

    <div className='my-10'>
<form onSubmit={handleFormSubmit} className=''> 

<div className='grid grid-cols-1 mid:grid-cols-2 lg:grid-cols-2 gap-4'>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Name</label>
  <input name='name' type="text" className="input w-full" placeholder="Enter the name of the coffee 1" />
</fieldset>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Chief</label>
  <input name='chief' type="text" className="input w-full" placeholder="Enter the chief name 2" />
</fieldset>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Supplier</label>
  <input name='supplier' type="text" className="input w-full" placeholder="Enter the supplier name 3" />
</fieldset>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Taste</label>
  <input name='taste' type="text" className="input w-full" placeholder="Say something about the taste 4" />
</fieldset>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Price in USD</label>
  <input name='price' type="text" className="input w-full" placeholder="Enter the price in USD" />
</fieldset>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Details</label>
  <input name='details' type="text" className="input w-full" placeholder="Enter Dertails 6" />
</fieldset>

</div>

<div className='my-5'>
       <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label class="label">Photo</label>
  <input name='addPhoto' type="text" className="input w-full" placeholder="Photo URL 7" />
</fieldset>
</div>


    <input className='btn w-full' type="submit"  value="Add Coffee" />
</form>
    </div>
</div>
  )
}

export default AddCoffee
