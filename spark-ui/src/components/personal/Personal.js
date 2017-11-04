import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { setChanges } from '../../actions/cardsActions';

class Personal extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    cards: PropTypes.object,
    // eslint-disable-next-line react/no-unused-prop-types
    setChanges: PropTypes.func
  }

  componentWillMount() {
  }

  render() {
    const { cards } = this.props;

    return (
      <div>Personal
        {
          Object.keys(cards).forEach((key) => {
            const obj = cards[key];
            return obj;
          })
      }
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      setChanges
    }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Personal);
