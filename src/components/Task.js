import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTask } from '../actions';

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
      <div
        style={{
          padding: '1rem',
          border: '1px solid #ccc',
          margin: '1rem 1rem 0 1rem'
        }}
        onClick={() => this.selectTask(name)}
        data-testid={taskNameToId(name)}
      >
        {name}
      </div>
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
