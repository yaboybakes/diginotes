import React from 'react'
import Form from './UpdateNoteForm'

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
  }

  showNote() {
    return (
      <div className="sticky">
        <h1>{this.props.task.msg}</h1>
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

  saveNote(update) {
    console.log("update " + update + " and index  " + this.props.index);
    this.props.onChange(update.target.value,this.props.index);
    this.setState({
      editing: false
    });
  }

  updateNote() {
    return <Form msg={this.props.children} save={this.saveNote}/>
  }

  render() {
    if (this.state.editing) {
      return this.updateNote();
    } else {
      return this.showNote();
    }
  }
}
