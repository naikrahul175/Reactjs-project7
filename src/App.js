import './App.css';
import Article from './components/sections/Article';
import Cryptocurrency from './components/sections/Cryptocurrency';
import Header from './components/Header';
import Insights from './components/sections/Insights';
import Slider from './components/sections/Slider';
import Update from './components/sections/Update';
import Videos from './components/sections/Videos';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <Cryptocurrency />
        <Article />
        <Update />
        <Videos />
        <Insights />
        <Footer />
    </div>
  );
}

export default App;
