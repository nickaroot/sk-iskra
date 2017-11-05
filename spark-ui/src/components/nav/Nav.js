import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Personal from '../personal/Personal';
import Device from '../device/Device';
import styles from './styles.scss';

// d8af0a

export default class Nav extends React.Component {
  render() {
    return (
      <Tabs inkBarStyle={{"backgroundColor": "#d8af0a"}}>
        <Tab label="Браслет" style={{"backgroundColor": "#0070c0"}}>
          <Device />
        </Tab>
        <Tab label="Пациент" style={{"backgroundColor": "#0070c0"}}>
          <Personal />
        </Tab>
      </Tabs>
    );
  }
}
