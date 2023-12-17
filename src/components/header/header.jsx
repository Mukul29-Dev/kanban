import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Header() {
    return (
        <div className="d-flex text-center">
            <div className="mt-5">
                <h1>Kanban</h1>
            </div>
            <div>
                <Container className="mt-5">
                    <Row>
                        <Col sm={4}>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button>
                            Search
                            </Button>
                        </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mt-5">
                Account login
            </div>
        </div>
    );
}
export default Header;


