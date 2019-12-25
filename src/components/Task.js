import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTask, deleteTask } from '../actions';
import { Notification, Delete } from 'bloomer';

const taskNameToId = name => {
  return `task-${name.split(' ').join('-')}`;
};

class Task extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      color: '#ccc',
      border: '1px',
      showDelete: false
    };
  }

  selectTask(name) {
    this.setState({ showDelete: true });
    this.props.selectTask(name);
  }

  borderClick = e => {
    this.setState({ color: '#ffdd57', border: '4px' });
  };

  borderClear = e => {
    this.setState({ color: '#ccc', border: '1px' });
  };

  deleteTask(task) {
    console.log('deleted');
    this.props.deleteTask(task);
  }

  render() {
    const { name } = this.props;
    return (
      <Notification
        isColor='info'
        style={{
          padding: '1rem',
          border: `${this.state.border} solid ${this.state.color}`,
          margin: '1rem 1rem 0 1rem',
          cursor: 'pointer'
        }}
        onClick={() => {
          this.selectTask(name);
          this.borderClick();
        }}
        data-testid={taskNameToId(name)}
      >
        {name}{' '}
        {this.state.showDelete ? (
          <Delete onClick={() => this.deleteTask(this.props.selectedTask)} />
        ) : null}
      </Notification>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTask: state.selectedTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectTask: name => dispatch(selectTask(name)),
    deleteTask: task => dispatch(deleteTask(task))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
