// create your App component here
import React, {useEffect, useState} from "react";

export default function App(){
    const [image, setImage]= useState(null)
    useEffect(()=>{
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then((data)=>{
            console.log(data);
            setImage(data.message);
        })
    }, [])

    if(!image) {
        return <p>Loading</p>
    }
    return (
        <div>
            <img alt="A Random Dog"  src={image}/>
        </div>
    )
}