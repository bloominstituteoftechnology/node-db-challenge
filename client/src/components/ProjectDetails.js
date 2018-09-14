import React, { Component } from 'react'
import axios from 'axios'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {
                actions: []
            }
        };
    }
    componentDidMount = () => {
        axios.get(`http://localhost:5000/api/projects/${this.props.match.params.id}`)
            .then(result => this.setState({ project: result.data }))
    }
    render() {
        console.log(this.state)
        return (
            <div className="project-details">
                <Card>
                    <CardBody>
                        <CardTitle>{this.state.project.name}</CardTitle>
                        <CardSubtitle>{this.state.project.description}</CardSubtitle>
                        <h4>Notes:</h4>
                        {this.state.project.actions.map(e => {
                            return (
                                <CardText key={e.id}>{e.description}
                                    {e.notes}</CardText>
                            );
                        })}
                    </CardBody>
                </Card>
            </div>
        )
    }
}
