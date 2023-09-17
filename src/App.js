import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Custom from './pages/Custom';
import NoPage from './pages/NoPage';
import Vision from './pages/Vision';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/> }>
          <Route index element={<Home/>} />  
          <Route path="vision" element={<Vision/>} />
          <Route path="custom" element={<Custom/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;