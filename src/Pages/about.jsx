import React from 'react'
import {Outlet, useParams} from 'react-router-dom'

function About() {

    let{username} = useParams();

    return ( <>
    <h1>
        This is {username} Component
        </h1>
        
        <div><Outlet></Outlet></div>
        
        
        </>
        
        );

}

export default About;