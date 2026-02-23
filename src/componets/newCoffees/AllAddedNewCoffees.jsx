import React, { useEffect, useState } from 'react'
import NewCoffeeCard from './NewCoffeeCard'

const AllAddedNewCoffees = () => {

   const [newCoffees, setNewCoffees] = useState([])

   const [coffees, setCoffeess] = useState(newCoffees)

        useEffect(()=>{
        fetch('http://localhost:5000/newCoffees')
        .then(res => res.json())
        .then(data =>{console.log(data),setNewCoffees(data), setCoffeess(data)})
    },[])


  return (
<div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 py-5'>
    {
        coffees.map(coffee =>
            
           <NewCoffeeCard key={coffee._id}
           coffees={coffees}
           setCoffeess={setCoffeess}
           coffee={coffee}
           
           ></NewCoffeeCard>
        )
    }
</div>
  )
}

export default AllAddedNewCoffees
