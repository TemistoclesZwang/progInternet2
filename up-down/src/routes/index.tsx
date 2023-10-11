import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Topics } from '../pages/topics';
import { LoginForm } from '../pages/login';
import { NotFound } from '../pages/NotFound';
import { About } from '../pages/about';

export const MyRouter = createBrowserRouter([
    {
        path:'/topics',
        element:<Topics/>
    },
    {
        path:'/login',
        element:<LoginForm/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'*',
        element:<NotFound/>
    },
]);


