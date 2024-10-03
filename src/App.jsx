
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Footer from './comp/Footer';
import Header from './comp/Header';
import './App.css';
import Services from './Services';
import ContactSection from './ContactSection';
import Blogs from './Blogs';

function App() {
  return (
    <Router>
      {/* The Header component will always be displayed */}
      <Header />

      {/* Define Routes to switch between pages */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        
        {/* About page */}
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />
        <Route path='/contact-us' element={<ContactSection />} />

        <Route path='blogs' element={<Blogs />} />

      </Routes>

      {/* The Footer component will always be displayed */}
      <Footer />
    </Router>
  );
}

export default App;
