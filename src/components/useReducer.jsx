import React, { useReducer, useState } from 'react'

function UseReducer() {

    const reducer = (state, action)=>{

        switch (action.type) {
            case "INCREMENT":
                return{count: state.count+1, showText:state.showText}
            case "Toggle":
                return{count:state.count, showText:!state.showText}
            default:
                return state;
        }


    }

    const[state, dispatch] = useReducer(reducer, {

        count:0,
        setText:true

    })


    return ( <>
    
    <center>
    <h1>{state.count}</h1>
   
    <button className='btn btn-success' 
    onClick={()=>{
        dispatch({type:"INCREMENT"});
        dispatch({type:"Toggle"})


    }}
    
    >+</button>
    <br/>
    <span>{state.showText && 'This is Text'}</span>
    </center>
    
    </> );
}

export default UseReducer;