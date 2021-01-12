import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUsers';
import ViewUser from './components/users/ViewUser';
import EditUser from './components/users/EditUser';
import IncreaseCount from './IncrementVal';

import Hookcall, {Runtime} from './Hookcall';

//npm run json-server for json server
//npm start for node server
//"json-server": "json-server --watch db.json --port 3003", /* You can remove this when you do not need it json server */

function App() {
  return ( 
          <>            
            <Router>
              <div className="App">
                <Navigation />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/users/add" component={AddUser} />
                  <Route exact path="/users/view/:id" component={ViewUser} />
                  <Route exact path="/users/edit/:id" component={EditUser} />
                  <Route exact path="/hookcall" render={() =>
                    <>
                      <Hookcall />
                      <Runtime />
                    </>
                  } />
                  <Route exact path="/increment-value" component={IncreaseCount} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </Router>
            
          </>
        );
}

export default App;
