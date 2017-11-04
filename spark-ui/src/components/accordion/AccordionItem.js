import React from 'react';

export default class AccordionItem extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <div>
          {this.props.title}
        </div>
        {this.props.opened && <div>{this.props.id}</div>}
      </div>
    );
    
  }
}
