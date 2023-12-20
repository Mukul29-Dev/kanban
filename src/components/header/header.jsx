import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './header.css';
import { BsFillKanbanFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";

function Header() {
    return (
        <Container className="mt-3 header-bg">
            <div className="row mx-auto align-middle">
                <div className="d-flex col-md-3">
                    <span className="kanban_ico">
                        <BsFillKanbanFill />
                        </span>
                    <h1>KANBAN</h1>
                </div>
                <div className="col-md-6">
                    <Form>
                        <Row className="justify-content-center align-middle mt-2">
                        <Col xs="auto col-md-10 text-end">
                            <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto col-md-2">
                            <Button variant="success" type="submit">Find</Button>
                        </Col>
                        </Row>
                    </Form>
                </div>
                <div className="d-flex col-md-3 justify-content-end">
                    <h4 className="mt-2 mx-2 py-1"> Login </h4>
                    <span className="kanban_ico mx-1" ><FaCircleUser /></span>
                </div>
            </div>
        </Container>
    );
}
export default Header;


