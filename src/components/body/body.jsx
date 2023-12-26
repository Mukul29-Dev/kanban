import React from 'react';
import './body.css';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Card from '../cards/card'


export default function Body() {
    
  return (
    <div className="section">
      <Row className="mt-3 justify-content-between mx-auto">
        <Col xs="col text-center Kan_col mt-5">
          <h3 className="mt-2 column_head">Task</h3>
            <Card />
        </Col>
      </Row>
    </div>
  );
}