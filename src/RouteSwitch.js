import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Shop from './components/Shop';

const RouteSwitch = () => {
  return (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/shop' element={<Shop />} />
      </Routes> 
  );
};

export default RouteSwitch;