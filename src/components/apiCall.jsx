import React, { useEffect, useState } from 'react';

function APICall() {
    
    // const [data, setdata] = useState([]);
    // const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} 
          </li>
        ))}
      </ul>
    );
  }
    
    // const apiData = () =>{

    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(it=>it.json())
    //     .then(data=>(setdata(data)))
    //     .then(setLoading(false));
        
        

    // }

    // if(loading){

    //     return(
    //         <>
    //         Loading
    //         {<apiData />}
    //         </>
    //     )


    // }

    // else{
    //     return(<>
        
    //     Loaded
        
    //         {console.log(data.results)}

            
    //     </>)
    // }
}



export default APICall;