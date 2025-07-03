import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import LandingPage from '../pages/LandingPage';
import LearningModulesPage from '../pages/LearningModulesPage';
import Quize from '../pages/Quize';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/learning-modules" element={<LearningModulesPage />} />
      <Route path="/historicals" element={<Historical />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/quize" element={<Quize />} />
    </Routes>
  );
}
