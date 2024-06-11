import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';

import {Link} from "react-router-dom"
import axios from "axios"
function Course() {
  const [game,setGame]=useState([])
  useEffect(()=>{
    const getGame=async()=>{
      try {
     
        const res= await axios.get("http://localhost:4001/games")
       const data= res.data.filter((data)=>data.category==="free")
       console.log(data)
      
        setGame(data)
       // setGame(data)
      } catch (error) {
        console.log(error)
      }
    };
    getGame();
  },[]);
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
        
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
               game.map((item)=>(
                <Cards key={item.id} item={item} />
               )) 
            }
        </div>
    </div>
    </>
  )
}

export default Course
