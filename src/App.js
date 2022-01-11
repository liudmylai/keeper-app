import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import notes from './notes';

function App() {
  return (
    <div className="App">
      <Header />
      <Main notes={notes}/>
      <Footer />
    </div>
  );
}

export default App;
