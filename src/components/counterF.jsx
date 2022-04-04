import React, { useState } from 'react';

function CounterF() {

    const[counters, setCounters] = useState(
        [{id:1, value:0},
        {id:2},{value:3},
        {id:3},{value:0},
        {id:4},{value:0},])
        
    const[count, setCount] = useState(0);
    const[persons, setPersons] = useState(['jabbar','arslan'])

    const increement = ()=>{
        

        const {id, value} = counters;
        console.log(id,value);

    }


    return ( 
        <>

        



        {/* <h1>
            Jabbar
        </h1>

            
                <ul className="list-group">
                    {
                persons.map(it=>(<li className="list-group-item">{it}</li>))
                    }
                </ul> */}
            

        </>

     );

  

}

export default CounterF;