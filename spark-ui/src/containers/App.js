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
    const id = '1'; //this.props.match.params.id;
    if (!id) {
      this.props.history.push('/auth');
    }

    this.props.actions.getCards(id);
  }

  render() {
    return (
      <div>
        <Header
          lastName={this.props.user.lastName}
          firstName={this.props.user.firstName}
          secondName={this.props.user.secondName}
          birthDate={this.props.user.birthDate}
        />
        <Nav />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let values = Object.values(state.cards.data);
  let user = {};

  if (values.length) {
    user.lastName = state.cards.data['1'].values[2].values[0];
    user.firstName = state.cards.data['1'].values[3].values[0];
    user.secondName = state.cards.data['1'].values[4].values[0];
    user.birthDate = state.cards.data['1'].values[5].values[0];
  }

  return {
    user
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
