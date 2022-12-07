import React from 'react';
import {
    Link,
    Navigate,
    Route,
    Routes, useNavigate
} from 'react-router-dom';
import './App.css';
import LoginForm, { FormData } from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Home from "./views/Home";
import Layout from "./views/Layout";
import RegistrationView from "./views/RegistrationView";

function App() {
    const navigate = useNavigate();
    const onLoginSubmit =(data: FormData) =>
    {
        navigate("/")
    }
    const onRegistrateSubmit =(data: FormData) =>
    {
        navigate("/")
    }

    return <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='/login' element={<LoginForm onSubmit={onLoginSubmit}/>} />
                <Route path='/registration' element={<RegistrationView />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    </>;
}

export default App;
