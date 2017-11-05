import React from 'react';
import TextField from 'material-ui/TextField';
import styles from './styles.scss';

export default class Auth extends React.Component {
  render() {
    return (
      <div className={styles.textField}>
        <TextField
          hintText="id браслета"
          floatingLabelText="Введите id браслета"
        />
      </div>
    );
  }
}
