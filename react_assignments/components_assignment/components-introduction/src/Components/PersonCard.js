import React, {useState} from 'react'; //importing React and Components so that we can create React component

const Person = (props)=>{
    let {firstName, lastName, age, hair} = props

    return(
        //can only return one parent. Structure others inside one main div to return mult elements
            <div>
                <h2>Person Name: {lastName}, {firstName} </h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hair}</p>
                <button>Birthday button for {firstName}</button>
            </div>
    )
}

export default Person; //export the class so that it is importable from other files