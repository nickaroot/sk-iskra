import React from 'react';
import styles from './styles.scss';

/* eslint-disable jsx-a11y/alt-text */
export default class Field extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <img />
        <div className={styles.name}>Иванов Иван</div>
        <div className={styles.age}>Возраст: 34</div>
      </div>
    );
  }
}
