import React from 'react'
import ReactDOM from 'react-dom'
import Form from './UpdateNoteForm'
import axios from 'axios'

export default class StickyNote extends React.Component {

  constructor()
  {
    super()
    this.state = {
      editing: false
    }
    this.showNote = this.showNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.randomNumber = this.randomNumber.bind(this);
    this.saveToMongo = this.saveToMongo.bind(this);
  }

  componentWillMount() {
    this.style = {
      left: this.randomNumber(10, window.innerWidth-510) + 'px',
      top: this.randomNumber(0,window.innerHeight-500) + 'px',
      transform: 'rotate(' + this.randomNumber(-25,40) + 'deg)',
      zIndex: 0,
      fontSize: 40+'px'
    };
    $(ReactDOM.findDOMNode(this)).draggable();
  }

  componentDidMount() {
      $(ReactDOM.findDOMNode(this)).draggable();
  }

  randomNumber(min,max) {
    return (min + Math.ceil(Math.random() * max));
  }

  showNote() {
    return (
      <div className="sticky" style={this.style}>
        <h1 onClick={this.editNote}>{this.props.task.msg}</h1>
        <span>
          <button className="btn btn-sm glyphicon glyphicon-comment" onClick={this.editNote}></button>
          <button className="btn btn-sm btn-danger glyphicon glyphicon-remove" onClick={this.props.onRemove}></button>
        </span>
      </div>
    )
  }

  editNote() {
    this.setState({
      editing: true
    })
  }

  saveToMongo(update,id) {
    axios.post('/api/new/' + id + '/' + update, {
      msg: update,
      id: id
    }).then((response) => {
      this.setState({
        editing: false
      })
    });
  }

  saveNote(update) {
    this.props.onChange(update,this.props.index);
    this.setState({
      editing: false
    });

    this.saveToMongo(update,this.props.index);
  }

  updateNote() {
    return <Form msg={this.props.children} save={this.saveNote} style={this.style}/>
  }

  render() {
    if (this.state.editing) {
      return this.updateNote();
    } else {
      return this.showNote();
    }
  }
}
