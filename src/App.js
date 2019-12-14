import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }

  render() {
    const { tasks } = this.props;

    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className='App'>
        <Controls />
        <Board stagesTasks={stagesTasks} stagesNames={this.stagesNames} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    selectedTask: state.selectedTask
  };
};

export default connect(mapStateToProps)(App);
