// import logo from './logo.svg'; turns off React logo. Delete ./logo.svg
// import './App.css'; deleted this because I plan to use index.css for global component styling
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
// Always export component files to use them later!
