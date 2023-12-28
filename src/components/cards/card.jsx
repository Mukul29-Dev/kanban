import React from 'react'
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from "react-bootstrap";


export default function Cards() {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cards');
        console.log("response", response)
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []); 
  return (
    <div>
    {
        cards.map(card => (
        <Card className="mx-auto mt-3 card_shadow" key={card.id}>
          <Card.Body>
            <Card.Title>{card.heading}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{card.description}</Card.Subtitle>
            <Card.Text></Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))
    }
      </div>
  )
}
