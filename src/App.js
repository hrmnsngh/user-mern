import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';

function App() {
  return (
    <div className="container-fluid">
      <div className="header">
        <header className='center'>
          <h1>User Location App</h1>
        </header>
      </div>
      <Router>
        <Switch>
          <Route path='/users' exact>
            <Users />
          </Route>
          <Route path='/newplace' exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
