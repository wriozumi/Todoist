import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }
onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''})
}

onChange = (e) => this.setState({title: e.target.value})

  render() {
    return (
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input 
            style={{flex: '10', padding: '5px'}}
            type="text"
            name="title"
            placeholder="Add"
            onChange={this.onChange}
            />
            <input 
            type="submit"
            value="Submit"
            className="btn"
            style={{flex: '1'}} />
        </form>
    )
  }
}
// PropTypes
AddTodo.propTypes = {
    AddTodo: PropTypes.func.isRequired
  }

export default AddTodo
