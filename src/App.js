import Navbar from './components/navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Content />
        <Footer />
      </header>
    </div>
  );
}

export default App;
