import React from 'react';
import './body.css'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function body() {
  return (
    <div className="section">
        <Row className="mt-5 justify-content-between mx-auto">
            <Col xs="col text-center Kan_col mt-5">
                <h3 className="mt-2 column_head" > To-Do </h3>
                <Card className="mx-auto mt-3 card_shadow">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                </Card>
            </Col>
            <Col xs="col text-center Kan_col mt-5">
                <h3 className="mt-2 column_head" > In-Progress </h3>
                <Card className="mx-auto mt-3 card_shadow" style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                </Card>
            </Col>
            <Col xs="col text-center Kan_col mt-5">
                <h3 className="mt-2 column_head" > In-review </h3>
                <Card className="mx-auto mt-3 card_shadow" style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                </Card>
            </Col>
            <Col xs="col text-center Kan_col mt-5">
                <h3 className="mt-2 column_head"> Completed </h3>
                <Card className="mx-auto mt-3 card_shadow" style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                </Card>
            </Col>
        
        </Row>
    </div>
  )
}
