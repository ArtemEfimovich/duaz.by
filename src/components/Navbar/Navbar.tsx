import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/Rentals">Аренда/Прокат</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Services">Услуги</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Catalog"> Каталог</NavLink>

            </div>
        </nav>
    )
}


export default Navbar;
