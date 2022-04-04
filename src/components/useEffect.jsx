import React, { useEffect, useState } from 'react';


function UserEffect() {
    

    let [data,setData] = useState("");
    
    useEffect(()=>{
      
        const apiUrl = 'https://jsonplaceholder.typicode.com/comments';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
                console.log("Api called")
                setData(data[0].email)
            });

    })


    return ( 
        <>
        this is email {data}

        </>

     );
}

export default UserEffect;