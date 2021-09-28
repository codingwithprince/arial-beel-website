import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavbarItem from './components/Header/NavbarItem';
import Home from './components/Home/Home';
import Seasons from './components/Seasons/Seasons';
import './css/responsive.css'


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarItem />
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/seasons" component={Seasons} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
