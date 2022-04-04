import React from 'react'
import Home from '../Pages/home'
import About from '../Pages/about'
import Error from '../Pages/error'

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function ReactRouter() {
    return ( 

        <Router>

            <nav>
                <Link to='/'> HOME </Link>
                <Link to='/about'> ABOUT </Link>



            </nav>

            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/about" element={<About></About>}/>
                <Route path="*" element={<Error></Error>}/>

            </Routes>
        </Router>

     );
}

export default ReactRouter;