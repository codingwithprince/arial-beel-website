import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavbarItem from './components/Header/NavbarItem';
import Home from './components/Home/Home';
import './css/responsive.css'


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarItem />
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
