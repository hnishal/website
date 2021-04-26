import React from 'react';
import { Card, Button, ListGroup, ListGroupItem, CardGroup } from 'react-bootstrap';
import image16 from '../../image/16.png'
import image17 from '../../image/17.png'
import '../css/HireCard.css';
const CardComponent3 = () =>
(
    <div class="row justify-content-center mt-5 pt-5">
        <div class=" col-sm-8 col-lg-6 col-md-6">
            <CardGroup>
                <Card >
                    <Card.Img className="p-5" class=" mt-5 img-17" variant="top" src={image16} />
                    <Card.Body>
                        <Card.Title className="text-center">Contract</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="text-center">Add to your time as needed</ListGroupItem>
                            <ListGroupItem className="text-center">Convert to full-time anytime</ListGroupItem>
                            <ListGroupItem className="text-center">Convenient payment options</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img className="p-5" class="mt-5 img-16" variant="top" src={image17} />
                    <Card.Body>
                        <Card.Title className="text-center">Full Time</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="text-center">Add best local professionals</ListGroupItem>
                            <ListGroupItem className="text-center">90 day money back gauarantee</ListGroupItem>
                            <ListGroupItem className="text-center">50% less than traditional staffing agency</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    </div>

)

export default CardComponent3;