import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/landing/Landing';
import Cookies from './components/cookies/Cookies';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="Login" component={Landing} />
        <Route exact path="/cookies" name="Cookies" component={Cookies} />
        
      </Switch>
    </Router>
  );
}

export default App;
