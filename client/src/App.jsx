import { BrowserRouter as Router,} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css'

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
