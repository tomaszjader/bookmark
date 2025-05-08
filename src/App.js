import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
