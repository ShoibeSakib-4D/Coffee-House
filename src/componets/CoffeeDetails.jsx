import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const CoffeeDetails = () => {

    const [coffeeDetail, setCoffeeDetail] = useState(null)

    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
        fetch(`http://localhost:5000/newCoffees/${id}`)
        .then(res =>res.json())
        .then(data =>{setCoffeeDetail(data)})
    },[id])

  return (
 <div className=" flex shadow-sm my-5 bg-[#F4F3F0] rounded-2xl">

  <figure>
    <img
      src={coffeeDetail?.addPhoto}
       />
  </figure>

  <div className=" text-black">
    <h2 className="card-title">{coffeeDetail?.name}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>

</div>
  )
}

export default CoffeeDetails
