import React from 'react'

export default class stickyNote extends React.Component {
  constructor()
  {
    super()
    this.state = {
      done: false
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    const style = {
      textDecoration: this.state.done ? "line-through" : ""
    }
    return (
      <li style={style} onClick={this.onClick}>
        {this.props.task}
      </li>
    )
  }
}
