import React, { useState } from 'react'
import Counter from './counter';

function CountersTrail() {

    const [counters, setCounters] = useState([

        {id:1, value:4},
        {id:2, value:3},
        {id:3, value:2},
        {id:4, value:0}
        


    ])

    const [cGlobal, setcGlobal] = useState(0);


    const countGlobal = ()=>{
            const c = 2;
           
        
        // counters.forEach(im=>{


        //     if(im.value>0){c++;}

        // })

            return c
        
    }


    const handleDelete = (CounterId)=>{

       const counter2 = counters.filter(c=>c.id!==CounterId);
        setCounters(counter2);
    }

    return ( <>
    
    {

        counters.map(it=>(<Counter onDelete={handleDelete} id={it.id} value={it.value}></Counter>))
        

    }
    <h1>{countGlobal()}</h1>
    
    
    
    </>);

}

export default CountersTrail;