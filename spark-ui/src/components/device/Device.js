import React from 'react';
import styles from './styles.scss';
import pulse from './icons/pulse.png'
import charge from './icons/charge.png';
import help from './icons/help.png';
import user from './icons/user.png';
import settings from './icons/settings.png';
import location from './icons/location.png';
import phone from './icons/phone.png';

export default class Personal extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
    <div className={styles.device}>
      <div className={styles.container} >
        <div className={styles.content}>
          <img src={pulse}/>
        </div>
        <div className={styles.sidebar + ' ' + styles.sidebarLeft} >
          <img src={charge}/>
          <p>25%</p>
        </div>
        <div className={styles.sidebar + ' ' + styles.sidebarRight}>
          <p className={styles.medium}>сейчас</p>
          <p className={styles.huge}>60</p>
          <p className={styles.medium}>ударов/мин</p>
        </div>
      </div>
      <div className={styles.container} >
        <div className={styles.item + ' ' + styles.trustee}>
          <img src={help}/>
          <p className={styles.huge}>Горизонтальное <br/>положение тела</p>
        </div>
        <div className={styles.item + ' ' + styles.trustee}>
          <p className={styles.huge}>Опекун1:</p>
          <div className={styles.listItem}>
            <img src={user}/>
            <p>Никифорова Татьяна</p>
          </div>
          <div className={styles.listItem}>
            <img src={phone}/>
            <p>+7 (912) 231-76-23</p>
          </div>
        </div>
        <div className={styles.item + ' ' + styles.trustee}>
          <p className={styles.huge}>Опекун2:</p>
          <div className={styles.listItem}>
            <img src={user}/>
            <p>Никифорова Татьяна</p>
          </div>
          <div className={styles.listItem}>
            <img src={phone}/>
            <p>+7 (912) 231-76-23</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.item + ' ' + styles.info}>
          <img src={location}/>
          <div className={styles.wide}>
            <p className={styles.hugeBlue}>Местоположение пациента:</p>
            <div className={styles.listItem}>
              <p>г. Москва, ул. 1-й Красноармейский<br/>проезд, д. 12</p>
            </div>
          </div>
        </div>
        <div className={styles.item + ' ' + styles.info}>
          <img src={settings}/>
          <div className={styles.wide}>
            <p className={styles.hugeBlue}>Настройки</p>
            <div className={styles.listItem}>
              <p>IP: 192.153.123.03</p>
            </div>
            <div className={styles.listItem}>
              <p>Port: 47</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container} >
        <div className={styles.item + ' ' + styles.history}>
          <p>04.11.2017 20:54:33 - Отправка СМС опекуну, повышенное давление</p>
          <p>02.11.2017 11:02:53 - Отправка СМС опекуну, низкий заряд браслета</p>
          <p>29.10.2017 05:44:11 - Поступление сигнала SOS об угрозе здоровью пациента</p>
        </div>
      </div>
    </div>

    );
  }
}
