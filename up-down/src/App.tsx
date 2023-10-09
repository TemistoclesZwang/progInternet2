import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { IndexPage } from './pages/home';
import { LoginForm } from './pages/login';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/">Home</Link>
            </nav>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/topics" element={<IndexPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
