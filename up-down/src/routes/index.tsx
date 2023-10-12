import React from 'react';
import { createBrowserRouter, Routes, Route } from 'react-router-dom';
import { Topics } from '../pages/topics';
import { LoginForm } from '../pages/login';
import { NotFound } from '../pages/NotFound';
import { About } from '../pages/about';

const routerConfig = [
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
];

export const MyRouter = {
    element: (
        <Routes>
            {routerConfig.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
            </Routes>
    )
};
