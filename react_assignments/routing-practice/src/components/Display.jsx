import React, { useState } from 'react';
import { useParams } from 'react-router';


const Display = ()=>{
    const { entry, color1="white", color2="black" } = useParams();
    console.log(entry, color1, color2)
    return (
        <div style={{border:"2px black",backgroundColor:`${color1}`, color:`${color2}`}} className=''>
            {
                isNaN(entry)?<h1>The word is: {entry}</h1>:<h1>The number is: {entry}</h1>
            }
        </div>
    );
};

export default Display;