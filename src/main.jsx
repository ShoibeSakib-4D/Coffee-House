import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './componets/Home.jsx';
import AddCoffee from './componets/AddCoffee.jsx';
import CoffeeDetails from './componets/CoffeeDetails.jsx';
import EditCoffee from './componets/EditCoffee.jsx';

import SignIn from './componets/signin/SignIn.jsx';
import SignUp from './componets/signup/SignUp.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Users from './componets/users/Users.jsx';


createRoot(document.getElementById('root')).render(
<BrowserRouter>
   <AuthProvider>

<Routes>

      <Route path="/" element={<MainLayout />}>

      <Route path="/" element={<Home></Home>}></Route>

      <Route path="/addcoffee" element={<AddCoffee />}/>

      <Route path='/coffee/:id' element={<CoffeeDetails/>}/>

      <Route path='/editCoffee/:id' element={<EditCoffee/>}/>

      <Route path="/signin" element={<SignIn />}/>
      <Route path="/signup" element={<SignUp />}/>

      <Route path="/users" element={<Users />}/>

</Route>

    </Routes>
   </AuthProvider>
  </BrowserRouter>,
)
