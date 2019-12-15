import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask, moveBack, moveForward } from '../actions';
import { Hero, HeroBody, Container, Title, Button, Input } from 'bloomer';

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
      <div>
        <Hero isColor='info' isSize='small'>
          <HeroBody>
            <Container hasTextAlign='centered'>
              <Title>Kanban Board</Title>
            </Container>
          </HeroBody>
        </Hero>
        <Container>
          <div style={{ display: 'flex', margin: '1rem' }}>
            <Input
              type='text'
              placeholder='New task name'
              style={{ fontSize: '1rem' }}
              data-testid='new-task-name-input'
              onChange={this.handleChange}
              value={this.state.task}
            />
            <Button
              isColor='info'
              style={{ marginLeft: '1rem' }}
              disabled={!this.state.task}
              data-testid='create-task-btn'
              onClick={() => this.addTask(task)}
            >
              Create
            </Button>
          </div>
          <div style={{ display: 'flex', margin: '1rem' }}>
            <Input
              readOnly
              placeholder='Selected task name'
              style={{ fontSize: '1rem' }}
              data-testid='selected-task-field'
              value={this.props.selectedTask || ''}
            />
            <Button
              style={{ marginLeft: '1rem' }}
              disabled={!this.props.selectedTask}
              data-testid='move-back-btn'
              onClick={() => this.moveBack(this.props.selectedTask)}
            >
              Move back
            </Button>
            <Button
              style={{ marginLeft: '1rem' }}
              disabled={!this.props.selectedTask}
              data-testid='move-forward-btn'
              onClick={() => this.moveForward(this.props.selectedTask)}
            >
              Move forward
            </Button>
            <Button
              style={{ marginLeft: '1rem' }}
              disabled={!this.props.selectedTask}
              data-testid='delete-btn'
              onClick={() => this.deleteTask(this.props.selectedTask)}
            >
              Delete
            </Button>
          </div>
        </Container>
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
