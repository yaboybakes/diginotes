import React from 'react'
import StickyNote from './StickyNote'

export default class BulletinBoard extends React.Component {
    constructor() {
      super()
      this.state = {
        notes: []
      }
      this.displayNote = this.displayNote.bind(this);
      this.generateId = this.generateId.bind(this);
      this.add = this.add.bind(this);
      this.update = this.update.bind(this);
      this.remove = this.remove.bind(this);
    }
    componentWillMount() {
      //pull in notes from DB and populate with this.add(note)
    }
    displayNote(note,idx) {
      return (
        <div>
          <StickyNote key={note.id} index={idx} onChange={this.update} onRemove={this.remove} task={note}>
            {note.msg}
          </StickyNote>
        </div>
      )
    }

    generateId() {
      this.uniqueId = this.uniqueId || 0;
      return this.uniqueID++;
    }

    add(task) {
      var list = this.state.notes
      list.push({
        id: this.generateId(),
        msg: task
      });
      this.setState({
        notes: list
      });
    }

    update(task,index) {
      var list = this.state.notes;
      list[index].msg = task;
      this.setState({
         notes: list
      });
    }

    remove(index) {
      var list = this.state.notes
      list.splice(index,1);
      this.setState({
        notes: list
      });
    }

    render() {
      return (
        <div className="bulletinBoard">
          <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.add.bind(null,"no trees were harmed in the making of this sticky note")}></button>
            {this.state.notes.map(this.displayNote)}
        </div>
      )
    }
}
