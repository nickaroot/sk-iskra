import React from 'react';
import styles from './styles.scss';
import Checkbox from 'material-ui/Checkbox';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

/* eslint-disable jsx-a11y/alt-text */
export class Field extends React.Component {
  handleCheck = (evt, isChecked) => {
    this.props.onChecked && this.props.onChecked(isChecked, {
      sectionId: this.props.sectionId,
      fieldId: this.props.fieldId
    });
  }

  render() {
    return (
      <div className={styles.field}>
        <Checkbox
          checked={this.props.checked1}
          label=""
          style={{
            width: '30px'
          }}
          onCheck={this.handleCheck}
        />
        <span className={styles.name}>{this.props.name}</span>
        {this.props.values.map((val, i) => {
          return (
            <span key={i} className={styles.val}>
              {val}
            </span>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let field = state.cards.data[props.sectionId].values[props.fieldId];
  return {
    checked1: field.checked, 
    name: field.name, 
    values: field.values, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Field);
