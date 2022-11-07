import React from 'react';
import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Главная страница</Link>
                </li>
                <li>
                    <Link to="/registration">Регистрация</Link>
                </li>
                <li>
                    <Link to="/login">Авторизация</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>;
}

export default Layout;