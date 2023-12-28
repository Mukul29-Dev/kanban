import React from 'react'
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Form from 'react-bootstrap/Form';

export default function ModalCard() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button variant="success" ref={target} onClick={() => setShow(!show)}>
        Add New
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgb(49 162 236 / 85%)',
              padding: '10px 10px',
              color: 'white',
              borderRadius:5,
              ...props.style,
            }}
          > <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
          </div>
        )}
      </Overlay>
    </>
  );
}

