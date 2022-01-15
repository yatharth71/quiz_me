import './App.css';
import Home from './pages/components/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RandomQuiz from './pages/components/RandomQuiz';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/random-quiz"><RandomQuiz /></Route>
      </Switch>
    </Router>
  )
}

export default App;
