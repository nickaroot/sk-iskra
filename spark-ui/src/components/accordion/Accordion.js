import React from 'react';
import AccordionItem from './AccordionItem';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openedId: null
    };
  }

  onItemClick = (id) => {
    this.setState({
      openedId: id
    });
  }

  render() {
    return (
      <div>
        {this.props.data.map(item => {
          return (
            <AccordionItem
              key={item.id}
              onClick={this.onItemClick}
              id={item.id}
              title={item.title}
              opened={this.state.openedId === item.id}
            >
              {item.children}
            </AccordionItem>
          )
        })}
      </div>
    );
  }
}
