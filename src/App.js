import Dictionary from "./Dictionary"
import './App.css';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultkeyword="Sun" />
      <Footer />
    </div>
    </div>
  );
}

export default App;
