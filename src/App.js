import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Vision from './pages/Vision';
import Custom from './pages/Custom';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/> }>
          <Route index element={<Home/>} />
          <Route path="team" element={<Team/>} />
          <Route path="vision" element={<Vision/>} />
          <Route path="custom" element={<Custom/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
