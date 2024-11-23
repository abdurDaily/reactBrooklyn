import React from 'react';
import Navbar from './components/navBar/Navbar';
import Banner from './components/banner/Banner';
import { Outlet } from 'react-router-dom';

const App = () => {

  
  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
      <Banner />
    </div>
  );
};

export default App;