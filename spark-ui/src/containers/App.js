import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import { getCards } from '../actions/cardsActions';

class App extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      })
    }),
    history: PropTypes.shape({
      push: PropTypes.func
    }),
    actions: PropTypes.shape({
      getCards: PropTypes.func
    })
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    if (!id) {
      this.props.history.push('/auth');
    }

    this.props.actions.getCards(id);
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

const mapStateToProps = () => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      getCards
    }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
