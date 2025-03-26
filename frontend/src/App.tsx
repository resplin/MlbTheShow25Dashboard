import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Baseball from './pages/Baseball';

function App() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="baseball" element={<Baseball />} />
            </Routes>
        </>
    )
}

export default App
