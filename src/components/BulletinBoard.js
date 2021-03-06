import React from 'react'
import StickyNote from './StickyNote'
import axios from 'axios'

export default class BulletinBoard extends React.Component {
    constructor() {
      super()
      this.state = {
        notes: [],
        uniqueId: 0
      }
      this.displayNote = this.displayNote.bind(this);
      this.generateId = this.generateId.bind(this);
      this.add = this.add.bind(this);
      this.update = this.update.bind(this);
      this.remove = this.remove.bind(this);
      this.clear = this.clear.bind(this);
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

    componentWillMount() {
      axios.get('/api/all').then(posts => {
        var list = [];
        list = posts.data;
        if (list !== null) {
          this.setState({
            notes: posts.data,
            uniqueId: length
          });
        }
      });
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

    clear() {
      axios.get('/api/clear').then(posts => {
        console.log(posts);
      });
      this.setState({
        notes: []
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
      console.log(index);
      var list = this.state.notes
      var id = list[index].id
      axios.get('/api/delete/'+id).then(res=>{
        this.setState({
          notes: res.data
        });
      });
    }

    render() {
      return (
        <div className="bulletinBoard">
          <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.add.bind(null,"no trees were harmed in the making of this sticky note")}></button>
          <button className="btn btn-sm btn-danger glyphicon glyphicon-trash" onClick={this.clear}></button>
            {this.state.notes.map(this.displayNote)}
        </div>
      )
    }
}
