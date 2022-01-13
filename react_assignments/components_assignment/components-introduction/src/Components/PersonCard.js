import React, { Component } from 'react'; //importing React and Components so that we can create React component

class PersonCard extends Component {
    render() { //can only return one parent. Structure others inside one main div to return mult elements
        const { firstName, lastName, age, hairColor} = this.props
        return <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            
        </div>
    }
}

export default PersonCard; //export the class so that it is importable from other files