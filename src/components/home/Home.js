import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Col, Row, Container } from 'react-bootstrap'
import { useState } from "react";

const elements = [
  { name: "banana" },
  { name: "apple" },
  { name: "glasses" },
  { name: "watermelon" },
  { name: "waffles" }
]

function Home() {
  const [item, setItem] = useState({})

  const selectItemFromSearch = item => {
    const currentItem = elements.find(element => element.name === item)
    setItem(currentItem)
  }

  return (
    <div>
      <Container className="justify-content-md-center">
        <Row>
          <Col lg={6}>
            landing page
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
