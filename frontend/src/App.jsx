import React from 'react';


import {Route,Routes} from "react-router-dom"
import Home from './home/Home';
import Games from './Games/Gamess';
import Signup from './components/Signup';


function App() {
  return (<>

<div className='light:bg-white light:text-blcak'>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/games" element={<Games/>}/>
  <Route path="/signup" element={<Signup/>}/>
</Routes>
</div>
  </>);
}

export default App