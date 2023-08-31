import React from 'react';
import { useCookies } from 'react-cookie';

export const Logout = () => {
    const [cookies, setCookie, removeCookie] = useCookies();

    const onLogout = () => {
        removeCookie('user')
        location.reload()
    };

    return <button onClick={onLogout}>Logout</button>
}