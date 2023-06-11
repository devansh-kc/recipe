import React from 'react';
import Popular from '../components/Popular';
import Veggie from '../components/Veggie';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

import Searched from './Searched';
import Cuisine from './Cuisine';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function Pages() {
  const location = useLocation();
  return (
    // <BrowserRouter>
    <AnimatePresence wait>
      <Routes location={location} key={location.pathname}>
        <Route path='/' Component={Home} />
        <Route path='/cuisine/:type' Component={Cuisine} />
        <Route path='/searched/:search' Component={Searched} />
        <Route path='/recipe/:name' Component={Recipe} />
      </Routes>
    </AnimatePresence>
    // </BrowserRouter>
  );
}

export default Pages;
