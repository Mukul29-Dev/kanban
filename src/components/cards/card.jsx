import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row } from "react-bootstrap";
import './card.css';
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import ReadData from "../Read/readData"
import { useMyContext } from '../MyContext';

export default function Cards() {
            const [cards, setCards] = useState([]);
            const {read_id, updateContextValue} = useMyContext();
            
            useEffect(() => {           
              const fetchCards = async () => {
                try {
                  const response = await axios.get('http://localhost:3000/cards');
                  setCards(response.data);
                } catch (error) {
                  console.error('Error fetching cards:', error);
                }
              };
            
              fetchCards();
            }, []);

            const handleDelete = async (id) => {
              try {
                await axios.delete(`http://localhost:3000/cards/${id}`);
                const updatedCards = cards.filter((card) => card.id !== id);
                setCards(updatedCards);
                console.log("data", cards);
              } catch (error) {
                console.error('Error deleting card:', error);
              }
            };

            
          const handleCombinedClick = (e) => {
            var id = e.target.getAttribute("data-id");
            console.log(e, e.target, id);
            updateContextValue({read_id:id});

    }

          return (
            <div>
            {
                cards.map(card => 
                (
                <Card className="mx-auto mt-3 card_shadow" key={card.id}>
                  <Card.Body>
                    <Card.Title>{card.heading}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{card.description}</Card.Subtitle>
                    <Row className="card_btn">
                      <Col>
                        <div  onClick={handleCombinedClick}><i data-id = {card.id} >Edit</i></div>
                      </Col>
                      <Col>
                        <AiOutlineDelete  onClick={() => handleDelete(card.id)} />
                        <div><i>Delete</i></div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              )
              )
            }
          </div>
          )
        }
