import React, { FC } from 'react';

import { MainPageWrapper } from './MainPageStyle';

import { NavBar } from '../NavBar/NavBar';

export const MainPage : FC = () => {
    return(
        <MainPageWrapper>
            <NavBar/>
        </MainPageWrapper>
    );
};