import React, {Component} from 'react';

class TaskField extends Component{
  constructor(props){
    super(props);
    this.state = {
      taskName: '',
      taskDescription: '',
      isEditOn: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  toggleEdit(){
    this.setState({
      isEditOn: !this.state.isEditOn,
    });
  }

  saveTask(e){
    this.toggleEdit();
    const newTask = {
      taskName: this.state.taskName,
      taskDescription: this.state.taskDescription,
      uniqueId: e.target.id,
    }
    this.props.onEdit(newTask);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  getTaskName() {
    return (
    this.state.isEditOn
      ? <input name='taskName' placeholder={this.props.taskName} onChange={this.handleChange}/>
      : this.props.taskName
    );
  }

  getTaskDescription() {
  return (
    this.state.isEditOn
      ? <input name = 'taskDescription' placeholder={this.props.taskDescription} onChange={this.handleChange}/>
      : this.props.taskDescription
    );
  }
  getButton(){
    return(
      this.state.isEditOn
      ? <button id={this.props.id} name='save' className=" btn btn-success btn-sm" onClick={this.saveTask}> Save Task</button>
      : <button id={this.props.id} name='edit' className=" btn btn-success btn-sm" onClick={this.toggleEdit}> Edit task</button>
    );
  }
  render() {
    return (
      <div>
          <ul>
            <li>Task Name: {this.getTaskName()} </li>
            <li>Task Description: {this.getTaskDescription()} </li>
          </ul>
          {this.getButton()}
          <button id={this.props.id} name={this.props.name} className=" btn btn-danger btn-sm" onClick={this.props.onDelete}> Delet this</button>
          <hr/>
      </div>
    );
  }
}

export default TaskField;