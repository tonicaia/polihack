import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Card from "react-bootstrap/Card";
import { Col, Row, Container, Button, CardGroup, Carousel, Modal, Form } from 'react-bootstrap'
import { useState, useEffect } from "react";
import { elements } from "./obj";
import s1 from "../../assets/s1.png"
import s2 from "../../assets/s2.png"
import s3 from "../../assets/s3.png"
import s4 from "../../assets/s4.png"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


firebase.initializeApp({
  apiKey: "AIzaSyCr7AIVDHhdi5fzKQqKt_kYz7-lWp5JvFk",
  authDomain: "wastecan-55bcc.firebaseapp.com",
  projectId: "wastecan-55bcc",
  storageBucket: "wastecan-55bcc.appspot.com",
  messagingSenderId: "1055838897299",
  appId: "1:1055838897299:web:344fdbb26b11915550b966"
})
const firestore = firebase.firestore();
let userID = localStorage.getItem("userId");

function Calculator(props) {
  const list = elements;
  const entitiesRef = firestore.collection('entities');
  const [item, setItem] = useState({})
  const [quantity, setQuantity] = useState(0)
  const [worstItem, setWorstItem] = useState({})
  const [betterItem, setBetterItem] = useState({})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createEntity = async (e) => {
    e.preventDefault();

    await entitiesRef.add({
      name: item.name,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      category: item.category,
      quantity: quantity,
      footprint: item.footprint,
      userId: userID
    })

    setQuantity(0);
  }

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

  useEffect(() => {
    userID = localStorage.getItem("userId");
  });

  return (
    <div>
      <br />
      <br />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pick up address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>County</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Cluj</option>
                  <option>Bucuresti</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Let's do this
          </Button>
        </Modal.Footer>
      </Modal>
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
            {betterItem && betterItem.name && 
              <Card variant="outlined" style={{ background: "#90EE90", maxHeight: "200px" }}>
                <Card.Header as="h5">{betterItem.name}</Card.Header>
                <Card.Body>
                  <Card.Title>Carbon Footprint: {betterItem.footprint} kgCO2</Card.Title>
                  <Card.Text>
                    Category: {betterItem.category}
                  </Card.Text>
                </Card.Body>
              </Card>
              }

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
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </Card.Text>

                  <br />
                  <span>
                    <Button variant="primary" onClick={createEntity}>Commit</Button>
                    {/* disabled={item.category === "electronics" ? "true" : "false"} */}
                    <Button variant="primary" style={{ float: "right" }} onClick={handleShow}>Let us pick it up</Button>
                  </span>
                </Card.Body>
              </Card>

              {worstItem && worstItem.name && 
              <Card variant="outlined" style={{ background: "#FF7F7F", maxHeight: "200px" }}>
                <Card.Header as="h5">{worstItem.name}</Card.Header>
                <Card.Body>
                  <Card.Title>Carbon Footprint: {worstItem.footprint} kgCO2</Card.Title>
                  <Card.Text>
                    Category: {worstItem.category}
                  </Card.Text>
                </Card.Body>
              </Card>
              }
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
