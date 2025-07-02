import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// import Learn from '../pages/Learn';
// import Play from '../pages/Play';
// import Historicals from '../pages/Historicals';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/learn" element={<Learn />} /> */}
      {/* <Route path="/play" element={<Play />} /> */}
      {/* <Route path="/historicals" element={<Historicals />} />    */}
    </Routes>
  );
}
