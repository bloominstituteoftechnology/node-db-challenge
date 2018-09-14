import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

export default (props) => {
    return (
        <div className="list-container">
            {props.projects.map(e => {
                return (
                    <Card key={e.id}>
                        <CardBody>
                            <CardTitle>{e.name}</CardTitle>
                            <CardText>{e.description}</CardText>
                            <Link to={`/${e.id}`}><Button>Details!</Button></Link>
                        </CardBody>
                    </Card>
                );
            })}
        </div>
    )
}
