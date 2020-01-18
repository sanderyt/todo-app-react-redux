import React from 'react';
import Fire from '../config/Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPowerOff, faTasks } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';

const Header = () => {

    const isLogged = useSelector(store => store.isLogged);
    const userEmail = useSelector(store => store.isUser);

    const signOut = () => {
        Fire.auth().signOut();
      }

    return (
        <div className="header">
            <div className="header__logo">
                <h1><FontAwesomeIcon icon={faTasks} /> To-do React & Redux App</h1>
            </div>
            {isLogged&&
            <div className="header__logout">
                <button className="btn btn--logout"><i class="fas fa-sliders-h"></i><FontAwesomeIcon icon={faUser} /> Account</button>
                <button onClick={signOut} className="btn btn--logout"><FontAwesomeIcon icon={faPowerOff} /> Logout</button>
            </div>
            }
        </div>
    );
};

export default Header;