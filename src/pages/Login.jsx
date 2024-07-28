import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../components/context';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
        if (registeredUser) {
            setUser(registeredUser[0]); // Assuming there's only one user stored
        }
    }, [setUser]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
        const user = registeredUser && registeredUser[0];
        if (user && email === user.email && password === user.password) {
            setUser(user);
            navigate('/dashboard');
        } else {
            alert('Invalid email or password');
        }
    };

    return (

        <>
            <h2 className='text-center py-5'>Hey User...!</h2>
            <form onSubmit={handleSubmit} className='col-4 offset-4 p-5 shadow'>
                <div className="form-group">
                    <label htmlFor="userEmail">Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="form-control"
                        id="userEmail"
                        aria-describedby="emailHelp"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userPassword">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="form-control"
                        id="userPassword"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary form-control">Submit</button>
                <p className='pt-3'>Not Registered Yet? <Link to='/registration'>Register Here...</Link></p>
            </form>
        </>

    );
}

export default Login;
