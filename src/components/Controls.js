import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask, moveBack, moveForward } from '../actions';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      task: ''
    };
  }

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  addTask(task) {
    this.props.addTask(task);
    this.setState({ task: '' });
  }

  deleteTask(task) {
    this.props.deleteTask(task);
  }

  moveBack(task) {
    this.props.moveBack(task);
  }

  moveForward(task) {
    this.props.moveForward(task);
  }

  render() {
    const { task } = this.state;
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex' }}>
          <input
            type='text'
            placeholder='New task name'
            style={{ fontSize: '1rem' }}
            data-testid='new-task-name-input'
            onChange={this.handleChange}
            value={this.state.task}
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!this.state.task}
            data-testid='create-task-btn'
            onClick={() => this.addTask(task)}
          >
            Create
          </button>
        </div>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder='Selected task name'
            style={{ fontSize: '1rem' }}
            data-testid='selected-task-field'
            value={this.props.selectedTask || ''}
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!this.props.selectedTask}
            data-testid='move-back-btn'
            onClick={() => this.moveBack(this.props.selectedTask)}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!this.props.selectedTask}
            data-testid='move-forward-btn'
            onClick={() => this.moveForward(this.props.selectedTask)}
          >
            Move forward
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!this.props.selectedTask}
            data-testid='delete-btn'
            onClick={() => this.deleteTask(this.props.selectedTask)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTask: state.selectedTask
  };
};

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task)),
  deleteTask: task => dispatch(deleteTask(task)),
  moveBack: task => dispatch(moveBack(task)),
  moveForward: task => dispatch(moveForward(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
