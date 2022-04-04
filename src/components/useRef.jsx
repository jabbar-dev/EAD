import React, { useRef } from 'react';


function UseRef() {

    let inputRef = useRef(null)

    let clickMe = () => {
        console.log(inputRef.current.value)
        inputRef.current.focus();
    }
    return ( 
        <>
        <h1>Use Ref</h1>
        
        <input type="text" placeholder='Ex..' ref={inputRef}></input>
        <br/>
        <button onClick={clickMe}>Click Me</button>
        </>
     );
}

export default UseRef;