import React, {useState} from 'react';
import LoginForm, { LoginFormData } from "../components/LoginForm/LoginForm";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../servises/post";

const LoginView = () =>{
    const navigate = useNavigate();
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const onSubmit = (data: LoginFormData) => {
        const loginRequest = async () => {
            setError("");
            setResult("");
            try{
                const response = await fetch(`${BASE_URL}/auth`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                if (response.status !== 200) {
                    const responseData = await response.json();
                    throw Error(responseData.message);
                }
                setResult("Пользователь вошел");
                setTimeout(() => {
                    navigate("/home");
                }, 1000);
            }catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
        };
        loginRequest();

    };
    return (
        <div>
            <LoginForm onSubmit={onSubmit} />
            {result && <>{result}</>}
            {error && <>{error}</>}
        </div>
    );
}

export default LoginView;