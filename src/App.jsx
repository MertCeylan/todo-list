import React, {Component} from 'react';
import AddTaskField from './components/AddTaskField';
import TaskField from './components/TaskField';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      taskName: '',
      taskDescription: '',
      list: [],
      uniqueId: 0,
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.AddTask = this.AddTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleFieldChange(fieldName, value){
    this.setState({
      [fieldName]:value
    });
  }

  editTask(task){
    const index = this.state.list.findIndex( (item) => (item.uniqueId == task.uniqueId));
    const result = this.updateItemOnStateList(index,task);
    this.setState({
      list: result
    });
  }
  
  updateItemOnStateList(index, task){
    const result = [...this.state.list.slice(0,index), {...this.state.list[index], ...task}, ...this.state.list.slice(index + 1)];
    return result;
  }

  AddTask(e) {
    const newTask = {
      taskName: this.state.taskName,
      taskDescription: this.state.taskDescription,
      uniqueId: this.state.uniqueId
    };
    console.log(this.state.taskDescription, this.state.taskName,this.state.uniqueId, newTask);
    this.setState({
      list: this.state.list.concat([newTask]),
      uniqueId: this.state.uniqueId + 1,
    });
  }

  deleteTask(e) {//done
    console.log(e.target);
    this.setState({
      // eslint-disable-next-line eqeqeq
      list: this.state.list.filter((item) => item.uniqueId != e.target.id),
    });
  }

  renderList() {
    return (this.state.list.map((item) => (
      <div key={item.uniqueId}>
        <TaskField
          id={item.uniqueId}
          taskName={item.taskName}
          taskDescription={item.taskDescription}
          onEdit={this.editTask}
          onChange={this.handleEditChange}
          onDelete={this.deleteTask}
        />
      </div>
    )));
  }

  
  render() {
    const tList = this.renderList();
    return(
      <div>
        <AddTaskField name={'taskName'} label={'New Task Name'} onChange={this.handleFieldChange} />
        <AddTaskField name={'taskDescription'} label={'New Task Description'} onChange={this.handleFieldChange} />
        <button name='addNewTask' className=" btn btn-success btn-sm" onClick={this.AddTask}> Add Task</button>
        {tList}
      </div>
    );
  }

}
export default App;
