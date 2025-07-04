import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;