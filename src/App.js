import Dictionary from "./Dictionary"
import './App.css';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>
        Welcome to Dictionary
       </h1>
       <h4>
         What word can I help you search for?
       </h4>
        <Dictionary defaultkeyword="Sun" />
      </header>
      <Footer />
    </div>
    </div>
  );
}

export default App;
