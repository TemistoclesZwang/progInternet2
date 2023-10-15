import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { MyRouter } from './routes';

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
            {MyRouter}
        </BrowserRouter>
    );
}

export default App;
