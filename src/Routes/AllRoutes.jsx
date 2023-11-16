import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Coins from '../Components/Pages/Coins';
import CoinsDetails from '../Components/Pages/CoinsDetails';
import Exchanges from '../Components/Pages/Exchanges';
import Home from '../Components/Pages/Home';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coin/:id' element={<CoinsDetails/>}/>
      <Route path='/exchanges' element={<Exchanges/>}/>
    </Routes>
  )
}

export default AllRoutes
