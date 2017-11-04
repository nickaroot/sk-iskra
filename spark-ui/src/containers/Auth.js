import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export default class Auth extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    })
  }

  constructor(props) {
    super(props);

    this.state = { id: '' };
  }

  handleIdChange = (evt, newValue) => {
    this.setState({
      id: newValue
    });
  }

  handleClick = () => {
    this.props.history.push(`/user/${this.state.id}`);
  }

  render() {
    const { id } = this.state;

    let isDisabled = true;
    if (id.length > 0) {
      isDisabled = false;
    }

    return (
      <div className={styles.textField}>
        <TextField
          hintText="id браслета"
          floatingLabelText="Введите id браслета"
          onChange={this.handleIdChange}
        />
        <RaisedButton
          disabled={isDisabled}
          label="Войти"
          primary
          style={{
            display: 'block'
          }}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
