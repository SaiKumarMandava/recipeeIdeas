import React from 'react';
import './App.css';
import { Suspense,lazy } from 'react';

import { Routes,Route } from 'react-router-dom';
import NavBar from './global/nav';
import Footer from './global/foter';
import Header from './global/header';

import ScrollToTop from "react-scroll-to-top";

const Categories = lazy(() => import('./components/categories'));
const IndividualCategory = lazy(() => import('./components/individualCategory'));
const IndividualRecipess = lazy(() => import('./components/individualRecipess'));
const IndividualCategoryDetails = lazy(() => import('./components/individualCtegoryDetails'));
const Healthy = lazy(() => import('./components/healthy'));
const Comfort = lazy(() => import('./components/comfort'));
const Adventurous = lazy(() => import('./components/adventurous'));

function App() {

  return (
    <div>
      <NavBar/>
     {/* <Categories/> */}
     {/* <Suspense fallback={<div>Loading...</div>}> */}
     <ScrollToTop smooth color="#6f00ff" 
     className='animate-bounce'
     style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
  padding:"10px 10px 10px 10px"
     }}
     />
     <Routes>
     <Route 
       exact path='/'
       element={<Header/>}
      />
      <Route 
       exact path='/categories'
       element={<Suspense  fallback={<div>Loading...</div>}><Categories/></Suspense>}
      />
        <Route 
       exact path='/individualCategory/:strCategory'
       element={<Suspense  fallback={<div>Loading...</div>}><IndividualCategory/></Suspense>}
      />

<Route 
       exact path='/individualCategoryDetails/:idCategory'
       element={<Suspense  fallback={<div>Loading...</div>}><IndividualCategoryDetails/></Suspense>}
      />
        <Route 
       exact path='/individualRecipe/:idMeal'
       element={<Suspense  fallback={<div>Loading...</div>}><IndividualRecipess/></Suspense>}
      />
        <Route 
       exact path='/healthy'
       element={<Suspense  fallback={<div>Loading...</div>}><Healthy/></Suspense>}
      />
        <Route 
       exact path='/comfort'
       element={<Suspense  fallback={<div>Loading...</div>}><Comfort/></Suspense>}
      />
       <Route 
       exact path='/adventurous'
       element={<Suspense  fallback={<div>Loading...</div>}><Adventurous/></Suspense>}
      />


      
     </Routes>
     {/* </Suspense> */}
     <Footer/>
    </div>
  );
}

export default App;
