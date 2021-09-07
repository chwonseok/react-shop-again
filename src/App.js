import Items from './components/Items';
import Jumbotron from './components/Jumbotron';
import Nav from './components/Nav';
import './index.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Nav />
        <Jumbotron />
        <Items />
      </div>
    </div>
  );
}

export default App;
