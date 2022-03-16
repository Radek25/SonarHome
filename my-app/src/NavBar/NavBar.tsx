import { FC } from 'react';

import { NavBarWrapper } from './NavBarStyle';


const NavLinksArr = [
    {id: 0, name: 'Home', icon: '🏠', href:'/'}, 
    {id: 1, name: 'Launches', icon: '🛰️', href:'/'}, 
    {id: 2, name: 'Rockets', icon: '🚀', href:'/'}, 
    {id: 3, name: 'Missions', icon: '🎯', href:'/'}, 
    {id: 4, name: 'Ships', icon: '🚢', href:'/'}
];

export const NavBar : FC = () => {
    return(
        <NavBarWrapper>
            <ul>
                {NavLinksArr.map(navOption => <li key={navOption.id}><a href={navOption.href}><span>{navOption.icon}</span>{navOption.name}</a></li>)}
            </ul>
        </NavBarWrapper>
    );
};