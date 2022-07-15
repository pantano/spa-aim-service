import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'


export default function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/signUp' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};
