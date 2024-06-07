import React from 'react'
import Navbar from "../components/Navbar";
import Banner from '../components/Banner';

import Footer from '../components/Footer';
import Games from '../components/Games';
//import Cards from '../components/Cards';
function Home() {
  return (<>
  < Navbar />
  <Banner/>
  <Games/>
<Footer/>
  </>);
}
export default Home;