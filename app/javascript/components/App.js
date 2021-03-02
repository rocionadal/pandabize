import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Bicycle from './Bicycle';
import Admin from './Admin';

class App extends Component {
    render() {
      return (
        <div>
            <Switch>
                <Route exact path="/" component={Bicycle} />
                <Route exact path="/admin" component={Admin} />
            </Switch>
        </div>
      );
    }
  }
  
  export default App;