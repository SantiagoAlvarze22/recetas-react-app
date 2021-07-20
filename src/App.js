import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { LoginPage } from './components/auth/LoginPage';
import { MainPage } from './components/layout/MainPage';
import { RecipeCard } from './components/recipes/RecipeCard';
import { useUser } from './context/UserContext';

function App() {
  const { login } = useUser();

  const validate = () => {
    return login;
  };

  const Private = (props) => {
    return validate() ? <Route {...props} /> : <Redirect to='/' />;
  };

  const Public = (props) => {
    return validate() ? <Redirect to='/main' /> : <Route {...props} />;
  };

  return (
    <Router>
      <Switch>
        <Public exact path='/' component={LoginPage} />
        <Private exact path='/main' component={MainPage} />
        <Route path='/description/:id' component={RecipeCard} />
      </Switch>
    </Router>
  );
}

export default App;
