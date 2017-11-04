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

  renderAccordion() {
    const { cards } = this.props;
    let fields = [];
    for (let key in cards) {
      let data = cards[key];
      fields.push(
        <div key={'id-'+key}>{data.name}</div>
      );
    }

    return fields
  }

  render() {
    return (
      <div>
        {this.renderAccordion()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards.data
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
