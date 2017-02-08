import React from 'react'
import ReactDOM from 'react-dom'
import StickyNote from './components/stickyNote'


class App extends React.Component {
   constructor() {
     super();
     this.state = {
       todos: ["finish my project","get some sleep","eat healthy","work out"],
       todo: ""
     }
     this.addTask = this.addTask.bind(this);
     this.handleTask = this.handleTask.bind(this);
   }
   addTask(newTask) {
     this.setState({
        todo: newTask.target.value
     });
   }
   handleTask() {
      var task = this.state.todo;
      var list = this.state.todos;
      list.push(task);
      this.setState({
        todos: list,
        todo: ""
      });

   }
   render() {
     return (<div>
       <h1>Todo List</h1>
       <ol>
         {this.state.todos.map(
           (todo,index) => <StickyNote key={index} task={todo} />
         )}
       </ol>
       <input value={this.state.todo} onChange={this.addTask} type="text" />
       <button onClick={this.handleTask}>Add Todo</button>
     </div>
    );
   }
}


ReactDOM.render(<App />,document.getElementById('app'));
