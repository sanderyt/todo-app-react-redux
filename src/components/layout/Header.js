import React from 'react';
import Fire from '../../config/Firebase';

import { useSelector } from 'react-redux';

const Header = (props) => {

    const isLogged = useSelector(state => state.isLogged);

    const signOut = () => {
        Fire.auth().signOut();
      }

    return (
        <div className="header">
            <div className="header__logo">
                <h1>To-do React & Redux App</h1>
            </div>
            {isLogged&&
            <div className="header__logout">
                <p>Welcome, user!</p>
                <button onClick={signOut} className="btn btn--logout">Logout</button>
            </div>
            }
        </div>
    );
};

export default Header;