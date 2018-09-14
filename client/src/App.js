import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Route } from 'react-router-dom'
import ProjectList from './components/ProjectList'
import ProjectDetails from './components/ProjectDetails'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }
  componentDidMount = () => {
    axios.get('http://localhost:5000/api/projects')
      .then(result => this.setState({ projects: result.data }))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <ProjectList {...props} projects={this.state.projects} />} />
        <Route path="/:id" component={ProjectDetails} />
      </div>
    );
  }
}

export default App;
