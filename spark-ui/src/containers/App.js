import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';

class App extends React.Component {
  componentWillMount() {
    if (!this.props.deviceId) {
      this.props.history.push('/auth');
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deviceId : state.app.deviceId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
