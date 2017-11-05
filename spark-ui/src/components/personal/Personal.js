import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { setChanges } from '../../actions/cardsActions';
import Accordion from '../accordion/Accordion';
import Field from '../field/Field';
import styles from './styles.scss';

class Personal extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    cards: PropTypes.object,
    // eslint-disable-next-line react/no-unused-prop-types
    actions: PropTypes.shape({
      setChanges: PropTypes.func
    })
  }

  onChecked = (isChecked, fieldData) => {
    this.props.actions.setChanges(isChecked, fieldData);
  }

  getChildren(group, sectionId) {
    let fields = [];
    for (var key in group.values) {
      if (key == 1) {
        continue;
      }

      fields.push(
        <Field
          sectionId={sectionId}
          fieldId={key}
          key={key}
          checked={group.values[key].checked}
          name={group.values[key].name}
          values={group.values[key].values}
          onChecked={this.onChecked}
        />
      );
    }

    if (!fields.length) {
      return <div className={styles.noData}>Нет данных</div>;
    }

    return (
      <div>
        {fields}
      </div>
    );
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

    return fields;
  }

  render() {
    let data = [];

    for (var key in this.props.cards) {
      data.push({
        id: key,
        title: this.props.cards[key].name,
        children: this.getChildren(this.props.cards[key], key)
      });
    }

    return (
      <div className={styles.accordionCont}>
        <Accordion data={data} />
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
