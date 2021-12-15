import './App.css';
import Home from './pages/components/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './pages/components/Login'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/register"><Login /></Route>
      </Switch>
    </Router>
  )
}

export default App;
