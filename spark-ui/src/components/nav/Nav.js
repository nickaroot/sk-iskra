import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Personal from '../personal/Personal';
import Device from '../device/Device';

export default class Nav extends React.Component {
  render() {
    return (
      <Tabs>
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
