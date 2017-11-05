import React from 'react';
import styles from './accordionItem.scss';

export default class AccordionItem extends React.Component {
  handleClick = (e) => {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div className={styles.item} >
        <div className={styles.itemTitle} onClick={this.handleClick} >
          {this.props.title}
        </div>
        {this.props.opened && <div>{this.props.children}</div>}
      </div>
    );
    
  }
}
