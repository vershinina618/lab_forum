import React, {useState} from 'react';
import RegistrationForm, {RegFormData} from "../components/RegistrationForm/RegistrationForm";
import { BASE_URL} from "../servises/post";
import {useNavigate} from "react-router-dom";

const RegistrationView = () => {
    const navigate = useNavigate();
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const onSubmit = (data: RegFormData) => {
        const regRequest = async () => {
            setError("");
            setResult("");
            try{
                const response = await fetch(`${BASE_URL}/user`, {
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
                setResult("Пользователь создан");
            }catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
        };
            regRequest();
            console.log('fetch', data)
        };

    return (
        <div>
            <RegistrationForm onSubmit={onSubmit} />
             {result && <>{result}</>}
             {error && <>{error}</>}
        </div>
    );
};

export default RegistrationView;