import React from "react";
import {Form as FinalForm, Field } from 'react-final-form';

export type FormData = {
    login: string;
    password: string;
}
type FormProps = {
    onSubmit: (data: FormData) => void;
}
const required = (value: string) => (value ? undefined : "обязательное поле")

const isValidLogin = (value: string) => {
    if (!/^([a-z0-9]{6,20})$/.test(value)) {
        return "Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.";
    }
    return undefined;
};

const composeValidators = (...validators: any[]) => (value: string) =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export default function RegistrationForm({onSubmit}: FormProps)
{
    //
    const submitHandler = (data: FormData) => {
        onSubmit(data)
    };

    return <>
        <h3>Registration</h3>
        <FinalForm
            onSubmit={submitHandler}
            render={({handleSubmit}) =>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="login"
                        validate={composeValidators(required, isValidLogin)}
                        render={({input, meta}) => (<>
                            <div>
                                <label>
                                    Login:
                                    <input {...input}
                                    />
                                </label>
                                {meta.touched && meta.error && <div>{meta.error}</div>}
                            </div>
                        </>)}/>
                    <Field
                        name="password"
                        validate={required}
                        render={({input, meta}) => (<>
                            <div>
                                <label>
                                    Password:
                                    <input {...input} type="password"
                                    />
                                </label>
                                {meta.touched && meta.error && <div>{meta.error}</div>}
                            </div>
                        </>)}/>
                    <button type="submit">Send</button>
                </form>
            }/>
    </>;
}