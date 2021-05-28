import Dictionary from "./Dictionary"
import './App.css';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <br/>
          <h1>
        Welcome to Dictionary 
        {" "}
        <span className="icon">
        <i class="fas fa-book-open"></i>
        </span>
       </h1>
       <h4>
         What word can I help you search for?
       </h4>
        <Dictionary defaultkeyword="Darkness" />
    </div>
      <Footer />
    </div>
  );
}

export default App;
