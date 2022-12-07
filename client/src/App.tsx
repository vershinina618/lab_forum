import React from 'react';
import {
    Navigate,
    Route,
    Routes
} from 'react-router-dom';
import './App.css';
// import LoginForm, { LoginFormData } from "./components/LoginForm/LoginForm";
// import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Home from "./views/Home";
import Layout from "./views/Layout";
import RegistrationView from "./views/RegistrationView";
import LoginView from "./views/LoginView";

function App() {
    // const navigate = useNavigate();
    // const onLoginSubmit =(data: FormData) =>
    // {
    //     navigate("/")
    // }
    // const onRegistrateSubmit =(data: FormData) =>
    // {
    //     navigate("/")
    // }

    return <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='/login' element={<LoginView />} />
                <Route path='/registration' element={<RegistrationView />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    </>;
}

export default App;
