import './App.css';
import { BrowserRouter, Routes, Link } from 'react-router-dom'
import { MyRouter } from './routes';
import { About } from './pages/about';
import { createAuthContext } from './context/AuthContext';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul className='links'>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/topics">Tópicos</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <createAuthContext></createAuthContext>
            {MyRouter.element}
            {createAuthContext}
        </BrowserRouter>
    );
}

export default App;

