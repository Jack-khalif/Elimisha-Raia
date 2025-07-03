import { BrowserRouter as Router,} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';
import Layout from './components/Layout';
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <main className="flex-grow">
          <AppRoutes />
        </main>
      </Layout>
    </Router>
  )
}

export default App
