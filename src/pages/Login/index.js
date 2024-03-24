import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '~/config/APIConfig';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [noti, setNoti] = useState('');

    // Check as soon as the component is mounted
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setNoti('');
        try {
            const response = await API.login(username, password);
            localStorage.setItem('token', response.data.token); // Save token to localStorage
            navigate('/'); // Redirect to home page after successful login
        } catch (error) {
            setNoti('Login unsuccessful');
        }
    };

    return (
        <div className={cx('container-form')}>
            <form onSubmit={handleLogin} className={cx('form-login')}>
                <h2>Login Form</h2>
                <div className={cx('login-item')}>
                    <img src="images/icon/user.svg" className={cx('icon-user')} />
                    <input
                        type="text"
                        id="username"
                        placeholder="Input your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={cx('login-item')}>
                    <img src="images/icon/pass.svg" className={cx('icon-user')} />
                    <input
                        type="password"
                        id="password"
                        placeholder="Input your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <span className={cx('error')}>{noti}</span>
                <button className={cx('button-login')} type="submit">
                    Đăng nhập
                </button>
            </form>
        </div>
    );
}

export default Login;
