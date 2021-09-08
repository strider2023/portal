import React, { useEffect, useState, useCallback, createContext } from 'react';
import Cookies from 'universal-cookie';
import SessionExpired from '../components/SessionExpired';

export const AuthContext = createContext({
    authState: null,
    addAuth: () => { },
    removeAuth: () => { }
});

export default function AuthProvider({ children }) {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const anonymousPaths = ['/', '/forgot-password', '/register'];

    const [authState, setAuthState] = useState({ status: 'success', error: null, user: null });

    console.log(window.location.pathname);

    useEffect(() => {
        console.log('Called');
        if (token) {
            const user = {
                roles: cookies.get('roles'),
                phone: cookies.get('phone'),
                lastName: cookies.get('lastName'),
                firstName: cookies.get('firstName'),
                email: cookies.get('email'),
                token: token
            };
            setAuthState({ status: 'success', error: null, user })
        } else {
            setAuthState({ status: 'error', error: { message: 'Invalid user session' }, user: null });
        }
    }, []);

    const addAuth = ({ error, user, status }) => {
        console.log('provider', { error, user, status });
        setAuthState({ error, user, status });
    };

    const removeAuth = () => {
        setAuthState({ status: 'error', error: { message: 'Invalid user session' }, user: null })
    };

    const contextValue = {
        authState,
        addAuth: useCallback(({ error, user, status }) => addAuth({ error, user, status }), []),
        removeAuth: useCallback(() => removeAuth(), [])
    };

    const handleBackToLogin = (e) => {
        window.location.replace('/');
        e.preventDefault();
    }

    const getComponent = () => {
        if (authState.status === 'pending') {
            return 'Loading...'
        }
        if (authState.status === 'error' && anonymousPaths.indexOf(window.location.pathname) === -1) {
            return (<SessionExpired message={authState.error?.message || 'Please login again.'} handleBackToLogin={handleBackToLogin}/>);
        }
        if (authState.status === 'success' && !authState.user) {
            return (<SessionExpired message={authState.error?.message || 'Please login again.'} handleBackToLogin={handleBackToLogin}/>);
        }
        if (authState.status === 'error' && anonymousPaths.indexOf(window.location.pathname) !== -1) {
            return children;
        }
        if (authState.status === 'success' && authState.user) {
            return children;
        }
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {getComponent()}
        </AuthContext.Provider>
    )
}