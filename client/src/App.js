import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardTitle, CardText, CardSubtitle } from 'reactstrap';

class App extends Component {
  state = { projects: [] };

  componentDidMount() {
    fetch('http://localhost:8000/api/projects')
      .then(res => res.json())
      .then(projects => this.setState({ projects }))
      .catch(err => console.error(err));
  }

  getProject = id => { // to use w/ react router preferably
    fetch(`http://localhost:8000/api/projects/${id}`)
      .then(res => res.json())
      .then(project => this.setState({ project }))
      .catch(err => console.error(err));
  };

  render() {
    console.log(this.state.projects)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Project Tracker</h1>
        </header>
        <br />
        <div className="projects">
          {this.state.projects.map(project => {
            const { name, description, completed } = project;
            return (
              <Card>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
                <CardSubtitle>
                  {completed ? 'completed' : 'in progress'}
                </CardSubtitle>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
