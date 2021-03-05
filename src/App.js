import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/landing/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="Login" component={Landing} />
        
      </Switch>
    </Router>
  );
}

export default App;
