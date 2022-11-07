import React from 'react';
import './App.css';
import LoginForm, { FormData } from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Home from "./components/views/Home";

function App() {
    const onSubmit = (data: FormData) => {
        console.log(data)
    };
    return <>
        <LoginForm onSubmit={onSubmit}/>
        <RegistrationForm onSubmit={onSubmit}/>
        <Home/>
    </>;
}

export default App;
