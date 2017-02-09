import React from 'react'

export default class UpdateNoteForm extends React.Component {
  constructor() {
    super()
    this.saveNote = this.saveNote.bind(this);
  }

  saveNote() {
    console.log(this.refs.update);
    this.props.save(this.refs.update.getDOMNode().value);
  }

   render() {
     return (
       <div className="sticky">
         <textarea ref="update" defaultValue={this.props.msg} className="form-control"></textarea>
         <button onClick={this.saveNote} className="btn btn-sm btn-success glyphicon glyphicon-floppy-saved"></button>
       </div>
    )
  }
}
