import './App.css';
import { BrowserRouter, Routes, Link } from 'react-router-dom'
import { MyRouter } from './routes';
import { About } from './pages/about';

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
            {MyRouter.element}
        </BrowserRouter>
    );
}

export default App;

