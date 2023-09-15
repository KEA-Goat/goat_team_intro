import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Custom from './pages/Custom';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/> }>
          <Route index element={<Home/>} />
          <Route path="intro" element={<Intro/>} />
          <Route path="custom" element={<Custom/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
