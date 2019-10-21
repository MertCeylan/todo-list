import React, {Component} from 'react';

class AddTaskField extends Component{
    constructor(props){
      super(props);
      this.state = {

      };
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(e){
    const text = e.target.value;
    this.props.onChange(this.props.name, text);
  }


  render() {
    return(
        <div className="form-group">
            <label htmlFor={this.props.name}> {this.props.label}</label>
            <input name={this.props.name} type="text" className="form-control" onChange={this.handleChange}/>
        </div>    
    );
  }

}

export default AddTaskField;