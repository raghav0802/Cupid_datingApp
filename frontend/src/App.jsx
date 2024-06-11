import React from 'react';

import toast, { Toaster } from 'react-hot-toast';
import {Navigate, Route,Routes} from "react-router-dom"
import Home from './home/Home';
import Games from './Games/Gamess';
import Signup from './components/Signup';
import { useAuth } from './context/AuthProvider';


function App() {
  const[authUser,setAuthUser]=useAuth();
  return (<>

<div className='light:bg-white light:text-blcak'>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/games" element={authUser?<Games/>:<Navigate to="/signup"/>}/>
  <Route path="/signup" element={<Signup/>}/>

</Routes>
<Toaster />
</div>
  </>);
}

export default App