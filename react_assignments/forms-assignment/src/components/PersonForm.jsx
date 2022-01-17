import React, {useState} from 'react';

const PersonForm = (props) => {

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPass, setConfirmPass] = useState("");

    return (
        <div>
            <h1>Enter your information below:</h1>
            <form action="">
                <div className='form-group'>
                    <label htmlFor="">First Name: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setFirstName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Last Name: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setLastName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Email: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Password: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Confirm Password: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setConfirmPass(e.target.value)} />
                </div>
                {/* <input type="submit" value="" /> */}
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPass}</p>
            </div>
        </div>
    )
}

export default PersonForm;