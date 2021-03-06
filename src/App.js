// =============== Apache configuration for server to handel dom router =========================
//https://www.digitalocean.com/community/tutorials/how-to-rewrite-urls-with-mod_rewrite-for-apache-on-ubuntu-18-04
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; //Redirect hook
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUsers';
import ViewUser from './components/users/ViewUser';
import EditUser from './components/users/EditUser';
import IncreaseCount from './temp/IncrementVal';
import Hookcall, {Runtime} from './temp/Hookcall';
import JsFile from './temp/JsFile';
import Compa from './context/Compa';
import Cardapp from './temp/Cardapp';
import Imageupload from './components/users/Imageupload';
import Dropdown from './temp/Dropdown';
import Passvalue from './temp/Passvalue';
import Multiplefields from './temp/Multiplefields';
import Datepicker from './temp/Datepicker';
import Dropdownnew from './temp/Dropdownnew';
import Members from './components/pages/Members';
//import firebase from './firebase';

//npm run json-server for json server
//npm start for node server
//"json-server": "json-server --watch db.json --port 3003", /* You can remove this when you do not need it json server */

function App() {

  /*React.useEffect(() => {
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.log("token",data);
    })
  });*/

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
                      <Hookcall button="Click Here" />
                      <Runtime />
                    </>
                  } />
                  <Route exact path="/increment-value" component={IncreaseCount} />
                  <Route exact path="/call-js-file" component={JsFile} />
                  <Route exact path="/context" component={Compa} />
                  <Route exact path="/card-app" component={Cardapp} />
                  <Route exact path="/image-upload" component={Imageupload} />
                  <Route exact path="/dropdown" component={Dropdown} />
                  <Route exact path="/pass-value-to-function" component={Passvalue} />
                  <Route exact path="/multiple-fields" component={Multiplefields} />
                  <Route exact path="/datepicker" component={Datepicker} />
                  <Route exact path="/dropdownnew" component={Dropdownnew} />
                  <Route exact path="/members" component={Members} />
                  <Route component={NotFound} />
                  {/* <Redirect to='/' /> */}
                </Switch>
              </div>
            </Router>
            
          </>
        );
}

export default App;
