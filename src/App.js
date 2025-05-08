import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Newsletter/Newsletter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slider />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
