import React, { FC } from 'react';

import { MainPageWrapper } from './MainPageStyle';

import { NavBar } from '../NavBar/NavBar';
import { LaunchesPage } from '../LaunchesPage/LaunchesPage';

export const MainPage : FC = () => {
    return(
        <MainPageWrapper>
            <NavBar/>
            <div className='contenet-wrapper'>
                <LaunchesPage/>
            </div>
        </MainPageWrapper>
    );
};