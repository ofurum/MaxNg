import React from 'react';
import "./signup.css";
import { Link } from "react-router-dom"


const SignUp = () => {
const [firstname, setFirstName] = React.useState("")
const [lastname, setLastName] = React.useState("")
const [email, setEmail] = React.useState("")
const [password, setPassword] = React.useState("")


const handleSubmit  = () => {
    localStorage.setItem("firstname",  firstname)
    localStorage.setItem("lastname", lastname)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    window.href = "/login"
}



    return(
        <div className="signup">
            <div className="signup-box">
                <p className="sign-text">Sign up</p>
              <form onSubmit={handleSubmit}>
                 <input type="text"  name="firstname" placeholder= "firstname" onChange={(e) => setFirstName(e.target.value)}/>
                 <input type="text"  name="lastname" placeholder= "lastname"  onChange={(e) => setLastName(e.target.value)}/>
                 <input type="email"  name="email" placeholder= "email" onChange={(e) => setEmail(e.target.value)}/>
                 <input type="password"  name="password" laceholder= "password" onChange={(e) => setPassword(e.target.value)}/>
                 <button>Submit</button>
              </form>
              <p>Already Registerd? <Link to="/login">Login</Link></p>
            </div>
          
        </div>
    )
}

export default SignUp