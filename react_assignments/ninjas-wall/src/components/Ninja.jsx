import React, {useState} from 'react';

const Ninja = (props)=>{
    //creating state variables to keep track of information collected on the form
    let [ninjaName, setNinjaName] = useState("");
    let [imageUrl, setImageUrl] = useState("");
    let [favColor, setFavColor] = useState("");
    let [graduatedStatus, setGraduatedStatus] = useState(false);

    // let listOfNinjas = []; can't use let because variable changes with every submission
    //create a state variable to store every ninja that was submitted from the form
    let [listOfNinjas, setListOfNinjas] = useState([]);


    const createNinja = (event) =>{
        event.preventDefault(); //the default behavior of a form when submitting is to reload the page and we are preventing that from happing using the preventDefault function because we don't want the page to reload
        let ninjaObj = {ninjaName,imageUrl,favColor, graduatedStatus};
        console.log(ninjaObj);
        setListOfNinjas([...listOfNinjas,ninjaObj]) //...(spread functionality...I think?) gets all of currently listed ninjas and allows to include what's currently in the list while adding a new object
    }

    //toggle graduation for student function that gets calleed when the check box is clicked
    const toggleGraduation = () =>{
        console.log("trying to graduate this student")

    }

    return (
        <>
            <form onSubmit={createNinja}>
                <div className="form-group">
                    <label htmlFor="">Ninja Name</label>
                    <input type="text" name="" id="" className="form-control" onChange={(event)=>setNinjaName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Image Url:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(event)=>setImageUrl(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Color</label>
                    <input type="text" name="" id="" className="form-control" onChange={(event)=>setFavColor(event.target.value)}/>
                </div>
                <input type="submit" value="Create Ninja!"/>
            </form>
            <hr />
            <h4>Here are our list of Ninjas!</h4>
            {
                listOfNinjas.map((ninja, index)=>{
                    return (
                        <div key={index} style={{border: "1px solid black", backgroundColor: ninja.favColor}}>
                            <h1>{ninja.ninjaName}</h1>
                            <img src={ninja.imageUrl} alt="" height="100px" width="80px"/>
                            <p>{ninja.favColor}</p>
                            <p><input type="checkbox" name="" id="" onClick={toggleGraduation}/>Graduate</p>
                        </div>
                        
                    )
                })
            } 
        </>
    )
}

export default Ninja;