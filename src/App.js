import React, { Component } from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import test from './components/test/test';
import EditContact from "./components/contacts/EditContact";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          <Header branding="Contact Manager"/>
          <div className="container">
            <Switch>
            <Route exact path="/" component={Contacts}>
            </Route>
            <Route exact path="/about" component={About}>
              </Route>
              <Route exact path="/contact/add" component={AddContact}>
              </Route>
              <Route exact path="/contact/edit/:id" component={EditContact}>
              </Route>
              <Route exact path="/test" component={test}>
              </Route>
              <Route component={NotFound} ></Route>
            </Switch>
          </div>
         </div>
        </Router>
      </Provider>
   
  );
}
}

export default App;
