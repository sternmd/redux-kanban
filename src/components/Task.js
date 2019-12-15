import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTask } from '../actions';
import { Notification, Delete } from 'bloomer';

const taskNameToId = name => {
  return `task-${name.split(' ').join('-')}`;
};

class Task extends Component {
  selectTask(name) {
    this.props.selectTask(name);
  }

  render() {
    const { name } = this.props;
    return (
      <Notification
        isColor='info'
        style={{
          padding: '1rem',
          border: '1px solid #ccc',
          margin: '1rem 1rem 0 1rem',
          cursor: 'pointer'
        }}
        onClick={() => this.selectTask(name)}
        data-testid={taskNameToId(name)}
      >
        {name} <Delete />
      </Notification>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectTask: name => dispatch(selectTask(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Task);
