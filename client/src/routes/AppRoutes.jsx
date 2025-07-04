import { Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import LandingPage from '../pages/LandingPage';
import LearningModulesPage from '../pages/LearningModulesPage';
import QuizPage from '../pages/QuizPage';
import ProgressPage from '../pages/ProgressPage';
import GetStartedPage from '../pages/GetStartedPage';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/learning-modules" element={<LearningModulesPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/get-started" element={<GetStartedPage />} />
    </Routes>
  );
}
