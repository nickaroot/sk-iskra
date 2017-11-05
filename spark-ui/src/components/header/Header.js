import React from 'react';
import styles from './styles.scss';

export default class Header extends React.Component {
  calculateAge(birthDay, birthMonth, birthYear) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate(); 
    var calculatedAge = currentYear - birthYear;

    if (currentMonth < birthMonth - 1) {
        calculatedAge--;
    }
    if (birthMonth - 1 == currentMonth && currentDay < birthDay) {
        calculatedAge--;
    }
    return calculatedAge;
  }

  render() {
    let {
      lastName,
      firstName,
      secondName,
      birthDate
    } = this.props;
    
    if (!lastName) {
      return null;
    }

    let bDateArr = birthDate.split('/');
    let age = this.calculateAge(bDateArr[0], bDateArr[1], bDateArr[2]);

    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoPicture}></div>
        </div>
        <div className={styles.name}>
          <p>{lastName} {firstName} {secondName}</p>
        </div>
        <div className={styles.age}><p>Возраст: {age}</p></div>
      </div>
    );
  }
}
