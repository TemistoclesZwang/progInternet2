import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { IndexPage } from '../home';
import { LoginForm } from '../login';
import { NotFound } from '../NotFound';

const router = createBrowserRouter([
    {
        path:'/tasks',
        element:<IndexPage/>
    },
    {
        path:'/login',
        element:<LoginForm/>
    },
]);

function App() {
    return (
        <RouterProvider router={router}>
            {router}
        </RouterProvider>
    );
}

export default App;
