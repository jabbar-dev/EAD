import React from 'react'
import { useNavigate, BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function Home() {
    
    let navigate = useNavigate();
    
    return ( 
    
    
    
    
    
    <>
    <button className='btn btn-success' onClick={()=>{navigate("/about")}}>Go To About</button>

    
    <h1>    
        This is Home Component
        </h1></> );
}

export default Home;