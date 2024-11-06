import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './global/nav';
import Footer from './global/foter';
import Header from './global/header';
import Categories from './components/categories';
import IndividualCategory from './components/individualCategory';
import IndividualRecipess from './components/individualRecipess';
import Healthy from './components/healthy';
import Comfort from './components/comfort';
import Adventurous from './components/adventurous';
import ScrollToTop from "react-scroll-to-top";

function App() {

  return (
    <div>
      <NavBar/>
     {/* <Categories/> */}
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
       element={<Categories/>}
      />
        <Route 
       exact path='/individualCategory/:strCategory'
       element={<IndividualCategory/>}
      />
        <Route 
       exact path='/individualRecipe/:idMeal'
       element={<IndividualRecipess/>}
      />
        <Route 
       exact path='/healthy'
       element={<Healthy/>}
      />
        <Route 
       exact path='/comfort'
       element={<Comfort/>}
      />
       <Route 
       exact path='/adventurous'
       element={<Adventurous/>}
      />


      
     </Routes>
     
     <Footer/>
    </div>
  );
}

export default App;
