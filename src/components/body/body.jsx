import React from 'react';
import {useEffect} from 'react'
import './body.css';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Card from "../cards/Card"
import ReadData from "../Read/readData"
import { useMyContext } from '../MyContext';



export default function Body() {
  const {read_id, updateContextValue} = useMyContext();
    useEffect(() => { 
      
}, [read_id, updateContextValue]);

  return (
    <div className="section">
      <Row className="mt-3 justify-content-between mx-auto">
        <Col xs="col text-center Kan_col mt-5">
          <h3 className="mt-2 column_head">Task</h3>
            <Card />
        </Col>
       { read_id && <ReadData />}
      </Row>
    </div>
  );
}