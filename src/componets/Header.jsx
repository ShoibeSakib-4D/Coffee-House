import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
      <div className="bg-base-100 shadow-sm">

  <div className="flex justify-center items-center py-4">
 
    <Link to={'/'} className="btn btn-ghost text-xl">daisyUI</Link>
  </div>

</div>
    </div>
  )
}

export default Header
