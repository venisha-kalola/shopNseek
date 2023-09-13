import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Dashboard from './dashboard';
import Navbar from './Navbar.js';
import SignUp from './signup';
import Login from './login';
import ProductList from "./productList";
import PriceDrops from './recentpricedrop';
import Commodities from './Commodities';
import HomePage from './mainPage';


//for home page-->mainPage

function App() {
  return (
    <div className="App">
      <Navbar />
     <HomePage/> 
    </div>
  );
}



//for dashboard-->dashboard

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//      <Dashboard/> 
//     </div>
//   );
// }


//for categories list -->categoriesPage
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <PriceDrops/>
//      <ProductList/>
//     </div>
//      );
//  }

// for products list---> commodities
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Commodities/>
//     </div>
//      );
//  }



// for login/sign up

// function App(){
//   const [currentPage, setCurrentPage] = useState('signup');

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className='App'>
//       <Navbar/>
//  <div className="app logg">
//       <header >
//         <h1>Shop N Seek</h1>
//         <div className="button-group">
//           <div className='button-property'>
//           <button 
//             className={currentPage === 'signup' ? 'active' : ''} 
//             onClick={() => handlePageChange('signup')}
//           >
//             Sign Up
//           </button>
//           </div>
//           <div className='"button-property'>
//           <button
//             className={currentPage === 'login' ? 'active' : ''}
//             onClick={() => handlePageChange('login')}
//           >
//             Log In
//           </button>
//           </div>
          
//         </div>
//       </header>
//       {currentPage === 'signup' ? <SignUp /> : <Login />}
//     </div>
//     </div>
   
//   );
// }



  export default App;