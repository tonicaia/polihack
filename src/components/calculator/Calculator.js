import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Card from "react-bootstrap/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Col, Row, Container, Button, CardGroup,Carousel } from 'react-bootstrap'
import { useState } from "react";
import { elements } from "./obj";
import s1 from "../../assets/s1.png"
import s2 from "../../assets/s2.png"
import s3 from "../../assets/s3.png"
import s4 from "../../assets/s4.png"

function Calculator() {
  const list = elements;

  const [item, setItem] = useState({})
  const [worstItem, setWorstItem] = useState({})
  const [betterItem, setBetterItem] = useState({})
  const selectItemFromSearch = item => {
    const currentItem = list.find(list => list.name === item)
    setItem(currentItem)
    if (currentItem) {
      const betterItem = list.find(el => el.footprint < currentItem.footprint)
      setBetterItem(betterItem)
      const worstItem = list.find(el => el.footprint > currentItem.footprint)
      setWorstItem(worstItem)
    }
  }

  return (
    <div>
      <br />
      <br />
      <Container className="justify-content-md-center">
        <Row>
          <Col lg={12}>
            <Autocomplete
              id="object-search-field"
              freeSolo
              options={list.map((option) => option.name)}
              onChange={(event, value) => selectItemFromSearch(value)}
              renderInput={(params) => <TextField {...params} label="Search..." />}
            />
          </Col>
        </Row>
        <br />
        <br />
        {item && item.name &&
          <Row>
            <CardGroup>
              <Card variant="outlined" style={{ background: "#90EE90", maxHeight: "200px" }}>
                <Card.Header as="h5">{betterItem.name}</Card.Header>
                <Card.Body>
                  <Card.Title>Carbon Footprint: {betterItem.footprint} kgCO2</Card.Title>
                  <Card.Text>
                    Category: {betterItem.category}
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
                <Card.Header as="h5">{item.name}</Card.Header>
                <Card.Body>
                  <Card.Title>Carbon Footprint: {item.footprint} kgCO2</Card.Title>
                  <Card.Text>
                    Category: {item.category}
                    <br />
                    <br />
                    <TextField
                      id="standard-number"
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  </Card.Text>

                  <br />
                  <span>
                    <Button variant="primary">Commit</Button>
                    <Button variant="primary" disabled={item.category === "electronics" ? "true" : "false"} style={{ float: "right" }}>Let us pick it up</Button>
                  </span>
                </Card.Body>
              </Card>

              <Card variant="outlined" style={{ background: "#FF7F7F", maxHeight: "200px" }}>
                <Card.Header as="h5">{worstItem.name}</Card.Header>
                <Card.Body>
                  <Card.Title>Carbon Footprint: {worstItem.footprint} kgCO2</Card.Title>
                  <Card.Text>
                    Category: {worstItem.category}
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Row>
        }
        <br />
          <br />
        <Row>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={s1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={s2}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={s3}
      alt="Third slide"
    />

    <Carousel.Caption>
         </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={s4}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Row>
      </Container>
    </div>
  )
}

export default Calculator;
