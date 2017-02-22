import React from 'react'
import ReactDOM from 'react-dom'

export default class UpdateNoteForm extends React.Component {
  constructor() {
    super()
    this.style = {
      left: (window.innerWidth/3+100)+'px',
      top: (window.innerHeight/4)+'px',
      transform: 'rotate(' + 0 + 'deg)',
      width: 1000+'px',
      height: 1000+'px',
      zIndex: 1,
      border: 5+'px solid red'
    }
    this.saveNote = this.saveNote.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  saveNote() {
    this.props.save(this.refs.update.value);
  }

  componentWillMount() {

  }

  componentDidMount() {
      $(ReactDOM.findDOMNode(this)).draggable();
  }

  cancelEdit() {
    console.log(this.props.style);
    this.setState({
      style: this.props.style
    });
  }


   render() {
     return (
       <div className="sticky" style={this.style}>
         <textarea ref="update" defaultValue={this.props.msg} className="form-control"></textarea>
         <button onClick={this.saveNote} className="btn btn-sm btn-success glyphicon glyphicon-floppy-saved"></button>
         <button onClick={this.cancelEdit} className="btn btn-sm btn-danger glyphicon glyphicon-trash"></button>
       </div>
    )
  }
}
