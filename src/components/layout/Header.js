import React from 'react';
import Fire from '../../config/Firebase';

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
                <h1>To-do React & Redux App</h1>
            </div>
            {isLogged&&
            <div className="header__logout">
                Search for task:<input type="text" /><button className="btn btn--logout">Search</button>
                <button className="btn btn--logout"><i class="fas fa-sliders-h"></i> Settings</button>
                <button onClick={signOut} className="btn btn--logout">Logout</button>
            </div>
            }
        </div>
    );
};

export default Header;