import React, { useState } from 'react';


const Box = (props) => {

    let [boxColor, setBoxColor] = useState("");
    let [boxes, setBoxes] = useState([]);

    const createBox=(event)=>{
        event.preventDefault();
        let boxObj = {boxColor};
        setBoxes([...boxes,boxObj]);
    }

    return (
        <div className="container text-center">
            <h1>Box Generator: </h1>
                <form onSubmit={createBox}>
                    <div className='mt-4 container d-flex gap-2 justify-content-center'>
                        <label htmlFor="">Color </label>
                        <input type="text" name="" id="" onChange={(e)=>setBoxColor(e.target.value)} />
                        <input type="submit" value="Add Box" />
                    </div>
                </form>
            <div className="d-flex mt-5 justify-content-center gap-4">
                {
                    boxes.map((box)=>{
                        return (
                            <div style= {{width:"40px", height:"40px", backgroundColor:`${box.boxColor}`}}>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Box