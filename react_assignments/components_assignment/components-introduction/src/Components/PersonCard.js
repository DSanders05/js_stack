import React, { Component } from 'react'; //importing React and Components so that we can create React component

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age:this.props.age
        };
    }

    render() {
        //can only return one parent. Structure others inside one main div to return mult elements

        let birthdayClick = ()=>{
            this.setState({age:this.state.age+1});
        }

        const { firstName, lastName, age, hairColor} = this.props

        return <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick= {birthdayClick}>Birthday button for {firstName} {lastName}</button>
        </div>
    }
}

export default PersonCard; //export the class so that it is importable from other files