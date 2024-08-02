
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonials';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Navbar />
      < Testimonial />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
