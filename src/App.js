import Dictionary from "./Dictionary"
import './App.css';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Welcome to Dictionary
       </h1>
        <Dictionary />
      </header>
      <Footer />
    </div>
  );
}

export default App;
