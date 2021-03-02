import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import User from './containers/User';
import Admin from './containers/Admin';

class App extends Component {
    render() {
      return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={User} />
                <Route exact path="/admin" component={Admin} />
            </Switch>
        </React.Fragment>
      );
    }
  }
  
  export default App;