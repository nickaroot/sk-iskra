import React from 'react';
import styles from './styles.scss';

/* eslint-disable jsx-a11y/alt-text */
export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
        	<div className={styles.logoPicture}></div>
        </div>
        <div className={styles.name}><p>Иванов Иван Николаевич</p></div>
        <div className={styles.age}><p>Возраст: 34</p></div>
      </div>
    );
  }
}
