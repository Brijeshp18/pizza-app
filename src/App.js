import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';  
import About from './pages/About';
function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
     <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/pizza-delivery' exact element={<Home/>}/>
      <Route path='/menu' exact element={<Menu/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/contact' exact element={<Contact/>}/>
     </Routes>
     </Router>
     <Footer/>
    </div>
  );
}

export default App;
