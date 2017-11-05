import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';

import App from './containers/App';
import Auth from './containers/Auth';

///user/:id

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router>
            <div>
              <Route exact path="/" component={App} />
              <Route exact path="/auth" component={Auth} />
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
