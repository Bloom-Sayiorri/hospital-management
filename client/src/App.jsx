import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='flex-grow flex'>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      </main>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App