import React from 'react'

export default class UpdateNoteForm extends React.Component {
  constructor() {
    super()
    this.saveNote = this.saveNote.bind(this);
  }

  saveNote() {
    this.props.save(this.refs.update.value);
  }

   render() {
     return (
       <div className="sticky">
         <textarea ref="update" id="newMsg" defaultValue={this.props.msg} className="form-control"></textarea>
         <button onClick={this.saveNote} className="btn btn-sm btn-success glyphicon glyphicon-floppy-saved"></button>
       </div>
    )
  }
}
