import React from 'react';
import styles from './styles.scss';
import Checkbox from 'material-ui/Checkbox';

/* eslint-disable jsx-a11y/alt-text */
export default class Field extends React.Component {
  render() {
    return (
      <div className={styles.field}>
      	<Checkbox
      		checked={this.props.checked}
      		label=""
      		style={{
      			width: '30px'
      		}}
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
