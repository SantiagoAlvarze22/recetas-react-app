import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from './components/auth/LoginPage';
import { MainPage } from './components/layout/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/main' component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
