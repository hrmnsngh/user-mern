import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import UsersList from './users/pages/UsersList';
import NewPlace from './places/pages/NewPlace';

function App() {
  const [users, setUser] = useState([{ id: '11111', image:'https://picsum.photos/200/300?random=1', name: 'Harman Singh', placeCount: 3 },
  { id: '11112', image:'https://picsum.photos/200/300?random=2', name: 'Vishal Kumar', placeCount: 2  },
  { id: '11113', image:'https://picsum.photos/200/300?random=3', name: 'Sarthak Bansal', placeCount: 2  },
  { id: '11114', image:'https://picsum.photos/200/300?random=4', name: 'Sujay Das', placeCount: 3  }
  ]);

  return (
    <div className="container-fluid">
      <div className="header">
        <header>
          <h1>User location App</h1>
        </header>
      </div>
      <Router>
        <Switch>
          <Route path='/users' exact>
            <UsersList users={users} />
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
