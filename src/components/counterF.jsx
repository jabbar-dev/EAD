import React, { useState } from 'react';

function CounterF() {

    const[counters, setCounters] = useState(
        [{id:1, value:0},
        {id:2},{value:0},
        {id:3},{value:0},
        {id:4},{value:0},])
        
    const[count, setCount] = useState(0);
    const[persons, setPersons] = useState(['jabbar','arslan'])

    const increement = ()=>{
        

        const {id, value} = counters[0];
        console.log(id,value);

    }


    return ( 
        <>

        <span>
            {counters[0].value}
        </span>

        <button className = "btn btn-primary" onClick={increement}>Increement</button>
        <br/>

        <span>
            {count}
        </span>

        <button className = "btn btn-primary" onClick={increement}>Increement</button>
        <br/>

        <span>
            {count}
        </span>

        <button className = "btn btn-primary" onClick={increement}>Increement</button>
        <br/>

        <span>
            {count}
        </span>

        <button className = "btn btn-primary" onClick={increement}>Increement</button>
        <br/>


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