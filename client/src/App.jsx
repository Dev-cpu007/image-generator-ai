import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Result from './pages/Result.jsx';
import BuyCredit from './pages/BuyCredit.jsx';
import Navbar from './components/navbar.jsx';
import Testinomial from './components/Testinomial.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/result' element={<Result/>}/>
                <Route path='/buy' element={<BuyCredit/>}/>
            </Routes>
            <Testinomial/>
            <Footer/>
        </div>
    );
}

export default App;
