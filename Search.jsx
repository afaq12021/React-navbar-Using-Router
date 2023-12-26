import React, { useState } from "react";
import { useActionData } from "react-router-dom";
import Sresult from "./Sresult";

const Search = () => {
    const [image,setImage]=useState("");

    const inputEvent=(event)=>{
        const data = event.target.value;
        setImage(data)
    }


   
    return (
        <>
            <div className="searchbar">
                <input type="text" placeholder="Search Anything" value={image} onChange={inputEvent} />
                
            </div>
          {image ==="" ? null : <Sresult name={image}/>}  
        </>
    );
}

export default Search;
