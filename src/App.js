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
function App() {

  return (
    <div>
      <NavBar/>
     {/* <Categories/> */}
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
