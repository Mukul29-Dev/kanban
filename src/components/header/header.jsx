import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './header.css'

function Header() {
    return (
        <Container className="mt-3 header-bg">
            <div className="row d-flex text-center mx-auto">
                <div className="d-inline-block col-md-4">
                    <h1>KANBAN</h1>
                </div>
                <div className="col-md-4">
                    <Form inline w-100>
                        <Row className=" justify-content-between">
                        <Col xs="auto col-md-9 text-end">
                            <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto col-md-3">
                            <Button type="submit">Submit</Button>
                        </Col>
                        </Row>
                    </Form>
                </div>
                <div className="col-md-4" >
                    <h4> Login </h4>
                </div>
            </div>
        </Container>
    );
}
export default Header;


