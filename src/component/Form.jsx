import React, { useState } from  'react';
    
    
const Form = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Your Form Data", newUser);
        //resetting state
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } value = { firstname }/>
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } value = { lastname }/>
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value = { email }/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value = { password }/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmpassword(e.target.value) } value = { confirmpassword }/>
            </div>
            <input type="submit" value="Create User" />
            First Name : {firstname}, 
            Last Name : {lastname}, 
            Email : {email}, 
            Password : {password}, 
            Confirm Password : {confirmpassword}
        </form>
    );
}
    
export default Form;
