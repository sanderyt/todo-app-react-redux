import React, { useState } from 'react';
import Fire from '../config/Firebase';

import Modal from '../components/Modal';
import LoadingSpinner from '../components/LoadingSpinner';

const Login = ({clicked, register}) => {

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorLogin, setErrorLogin] = useState(null);
    const [errorRegister, setErrorRegister] = useState(null);
    const [registerClick, setRegisterClick] = useState(false);

    const handleChangeUser = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const loginHandler = (event) => {
        setIsLoading(true);
        event.preventDefault();
        Fire.auth().signInWithEmailAndPassword(userName, password).then((u) => {
        }).catch((error) => {
            setIsLoading(false);
            setErrorLogin(error.message);
        });

    }

    const clickRegister = () => {
        setRegisterClick(!registerClick);
    }

    const registerHandler = (event) => {
        setIsLoading(true);
        Fire.auth().createUserWithEmailAndPassword(userName, password)
        .catch((error) => { 
            setIsLoading(false);
            setErrorRegister(error.message)
        });
    }

    return (
        <div>
            <div className="login">
                <div className="login__box">
                    <b>Emailadres: </b><input type="text" onChange={handleChangeUser}/><br />
                    <b>Wachtwoord: </b><input type="password" onChange={handleChangePassword}/><br />
                    <button className={isLoading ? "btn btn--green" : "btn"} onClick={loginHandler}>Inloggen {isLoading&& <LoadingSpinner />}</button><br />
                    {errorLogin&& <p className="error">{errorLogin}</p>}
                    <p><h3 onClick={clickRegister}>Registeren</h3>| Wachtwoord vergeten</p>
                </div>
            </div>
            {registerClick &&
            <Modal title="Maak een account aan" close={clickRegister}>
                    <b>Email: </b><input type="text" onChange={handleChangeUser} /><br />
                    <b>Wachtwoord: </b><input type="password" onChange={handleChangePassword}/><br />
                    {errorRegister&& <p className="error">{errorRegister}</p>}
                    <button className={isLoading ? "btn btn--green" : "btn"} onClick={registerHandler}>Registeren {isLoading&& <LoadingSpinner />}</button>
            </Modal>
            }
        </div>
    );
};

export default Login;