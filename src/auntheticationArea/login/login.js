import React from 'react';
import { Link } from 'react-router-dom'
import "./login.css"

const Login = () => {
const [email, setEmail] = React.useState("")
const [password, setPassword] = React.useState("")

const getEmail = localStorage.getItem("email")
const getPassword = localStorage.getItem("password")


const handleSubmit = (e) => {
    e.preventDefault();

    if(email !== getEmail){
        alert("Please enter the correct email")
    }

    if(password !== getPassword){
        alert("Please enter the correct password")
    }

    if(email === getEmail && password === getPassword){
       window.location.href = "/"
    }


} 


    return (
        <div className="login">
            <div className="login-box">
            <p className="text">Login</p>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                    <input type="password"  name="password" className="" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    
                    <button>Submit</button>
                </form>
                 <p>Havent't signed up yet? <Link to="/signup">Sign up</Link></p>
            </div>
        </div>

    )
}

export default Login