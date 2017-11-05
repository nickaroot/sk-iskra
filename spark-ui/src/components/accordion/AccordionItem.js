import React from 'react';
import styles from './accordionItem.scss';

export default class AccordionItem extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div className={styles.item} onClick={this.handleClick}>
        <div className={styles.itemTitle}>
          {this.props.title}
        </div>
        {this.props.opened && <div>{this.props.children}</div>}
      </div>
    );
    
  }
}
