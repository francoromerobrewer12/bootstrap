import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Cards from './components/Cards/Cards';
import LearnOne from './components/LearnOne/LearnOne';
import LearnTwo from './components/LearnTwo/LearnTwo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Search />
      <Cards />
      <LearnOne />
      <LearnTwo />
    </div>
  );
}

export default App;
