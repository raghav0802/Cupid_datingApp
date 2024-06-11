import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 import Cards from './Cards';

import axios from "axios"
function Games() {
  const [game,setGame]=useState([])
  useEffect(()=>{
    const getGame=async()=>{
      try {
     
        const res= await axios.get("http://localhost:4001/games")
    
       
       const data= res.data.filter((data)=>data.category==="free")
       console.log(data)
        setGame(data)
      } catch (error) {
        console.log(error)
      }
    };
    getGame();
  },[]);

   
    // console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return( <>

    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
     <div>
       <h1 className='font-semibold text-xl pb-2'>Free Available Bonding Games </h1>
        <p>
            Games that helps you to know more about your match in more and interesting way
        </p>
       
    </div>
    <div>
    <Slider {...settings}>
        
      {game.map((item)=>{
        <Cards item={item} key={item.id}/>
      })}
      </Slider>
    </div>
    </div>
    </>
   
    );
}

export default Games;
