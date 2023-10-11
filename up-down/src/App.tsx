import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { About } from './pages/about';

function App() {
    return (
        <BrowserRouter>
            <nav className='links'>
                <Link to="/login">Login</Link>
                <Link to="/topics">Tópicos</Link>
                <Link to="/about">Sobre</Link>
            </nav>
        </BrowserRouter>
    );
}

export default App;
