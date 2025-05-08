import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Newsletter/Newsletter';
import Extension from './components/Extension/Extension';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slider />
      <Extension />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
