import { Main } from './pages/Main/Main';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </div>

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
