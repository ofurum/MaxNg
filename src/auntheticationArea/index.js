import React from 'react';
import { Routes, Route} from "react-router-dom";
import Login from "./login/login";
import SignUp from './signup/signup';

const AuntheticationArea = () => {

    return (
        <div className="auth">
             <Routes>
                 <Route path="/login" element={<Login />} />
                 <Route path="/signup" element={<SignUp />} />
             </Routes>
        </div>

    )
}

export default AuntheticationArea;