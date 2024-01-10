import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FiEdit } from "react-icons/fi";
import { useMyContext } from '../MyContext';

export default function ReadData() {

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const {read_id, updateContextValue} = useMyContext();
        

        const [read, setRead] = useState({});

          useEffect(() => { 
                const fetchCards = async () => {
                  try {
                        const response = await axios.get(`http://localhost:3000/cards/${read_id}`);
                        setRead(response.data);
                        setShow(true);
                        console.log("data-rendered", response.data)
                  } catch (error) {
                        console.error('Error fetching cards:', error);
                  }
            };
          
            fetchCards();
          
            }, [read_id]);

      return (
        <>
       
        { read &&
          
            <Modal show={show} onHide={handleClose} animation={false} key={read.id}>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Card</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Task</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Task Name"
                            name="heading"
                            value={read.heading}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Description"
                            name="description"
                            value={read.description}
                            onChange={(e)=> e.target.value}
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary">
                        Update
                      </Button>
                    </Modal.Footer>
              </Modal>
        }
          </>
      )
    }
