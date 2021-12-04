import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Col, Row, Container } from 'react-bootstrap'
import { useState } from "react";

const elements = [
  {name: "banana"},
  {name: "apple"},
  {name: "glasses"},
  {name: "watermelon"},
  {name: "waffles"}
]

function Home() {
  const [item, setItem] = useState({})

  const selectItemFromSearch = item => {
    setItem(elements.find(element => element.name === item))
  }

  return(
    <div>
      <Container className="justify-content-md-center">
        <Row>
          <Col lg={6}>
            <Autocomplete
              id="object-search-field"
              objectSearch
              options={elements.map((option) => option.name)}
              onChange={(event, value) => selectItemFromSearch(value)}
              renderInput={(params) => <TextField {...params} label="Search for an object" />}
            />
          </Col>
        </Row>

        <Row>
          <Card variant="outlined">
            Selected Item: {item.name}
          </Card>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
