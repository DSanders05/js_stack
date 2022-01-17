import React, {useState} from 'react';

const PersonForm = (props) => {

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPass, setConfirmPass] = useState("");

    return (

        // First name or Last name is less than 2 chars, output error message saying that field must be at least 2 chars
        // Email less than 5 chars, output error message
        // Passwords must match and be at least 8 chars
        // These messages can appear upon rendering page and dissapear in real time
        // Use conditional rendering

        <div>
            <h1>Enter your information below:</h1>
            <form action="">
                <div className='form-group'>
                    <label htmlFor="">First Name: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setFirstName(e.target.value)} />
                    {
                        firstName.length <2?
                        <p className="text-danger">First name must be at least 2 characters long.</p>:
                        ""
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor="">Last Name: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setLastName(e.target.value)} />
                    {
                        lastName.length<2?
                    <p className="text-danger">Last name must be at least 2 characters long.</p>:
                        ""
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor="">Email: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                    {
                        email.length<5?
                        <p className="text-danger">Email must be at least 5 characters long.</p>:
                        ""
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor="">Password: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
                    {
                        password.length<8?
                        <p className="text-danger">Password must be at least 8 characters long.</p>:
                        ""
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor="">Confirm Password: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setConfirmPass(e.target.value)} />
                    {
                        password != confirmPass?
                        <p className="text-danger">Confirm password must be at least 8 characters long and match entry above.</p>:
                        ""
                    }
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