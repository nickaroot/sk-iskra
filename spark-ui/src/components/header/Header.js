import React from 'react';
import styles from './styles.scss';

export default class Header extends React.Component {
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
