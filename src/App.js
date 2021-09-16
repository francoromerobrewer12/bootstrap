import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Search />
      <Cards />
    </div>
  );
}

export default App;
