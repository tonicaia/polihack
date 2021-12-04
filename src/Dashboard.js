import React, { Component, useState, useEffect } from 'react';
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import { Card, ListGroup, Row, Col, Container, Toast, Button, ToastContainer, Accordion, Image } from 'react-bootstrap'
import './Dashboard.css'
import week from './assets/1w.png'
import month from './assets/1m.png'
import tmonths from './assets/3m.png'
import smonths from './assets/6m.png'
import year from './assets/1y.png'
import { Navigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
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
const userID = localStorage.getItem("userId")

const series = [
  {
    name: "Carboon Footprint",
    data: [19, 13, 20, 15, 8, 22, 20, 23,19, 22, 20, -12, 10, 15, 20, 23,19, 22, 14, 26, 28, -6, 20, 23,-4, 5, 6, 5, 16, 22]
  }
];
const options = {
  xaxis: {
    categories: ["2021-11-01", "2021-11-02", "2021-11-03", "2021-11-04", "2021-11-05", "2021-11-06", "2021-11-07", "2021-11-08","2021-11-09", "2021-11-10", "2021-11-11", "2021-11-12", "2021-11-13", "2021-11-14", "2021-11-15", "2021-11-16","2021-11-17", "2021-11-18", "2021-11-19", "2021-11-20", "2021-11-21", "2021-11-22", "2021-11-23", "2021-11-24","2021-11-25", "2021-11-26", "2021-11-27", "2021-11-28", "2021-11-29", "2021-11-30"]
  },
  stroke: {curve: "smooth"},
  colors: ["#bada55"]
};

const optionsProgress = {
  labels: ["Negative impact", "Positive impact"], //label of this diagram
};

function Example() {
  const [show, setShow] = useState(true);

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <ToastContainer position="top-end" style={{ zIndex: 1113, marginTop: 20, marginRight: 20 }}>
            <Toast onClose={() => setShow(false)} show={show} delay={8000} autohide>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Congratulations!</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Good job your CO2 footprint is 0.</Toast.Body>
            </Toast>
            <Toast onClose={() => setShow(false)} show={show} delay={8000} autohide>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">We miss you!</strong>
                <small>15 mins ago</small>
              </Toast.Header>
              <Toast.Body>Your recent activity was poor.</Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
      </Row>
    </Container>
  );
}

function Dashboard() {
  const entitiesRef = firestore.collection('entities').where("userId", "==", userID);
  const [entities] = useCollectionData(entitiesRef, { idField: 'id' });

  let entitiesGroupedByCategory = [];
  let entitiesGroupedByElements = [];

  const prepareData = () => {
    let categoryOptions = { labels: [] }
    let categorySeries = []

    let elementOptions = { labels: [] }
    let elementSeries = []

    let positiveSeries = 0;
    let negativeSeries = 0;

    entities && entities.forEach(entity => {
      let foundCategory = entitiesGroupedByCategory.find(element => element.category === entity.category)
      let foundElement = entitiesGroupedByElements.find(element => element.name === entity.name)

      if (foundCategory) {
        let originalNumber = parseFloat(entitiesGroupedByCategory[entitiesGroupedByCategory.indexOf(foundCategory)].totalFootprint)
        let newNumber = parseFloat(entity.footprint)
        entitiesGroupedByCategory[entitiesGroupedByCategory.indexOf(foundCategory)].totalFootprint = (originalNumber + newNumber).toString()
        // parseFloat(entitiesGroupedByCategory[entitiesGroupedByCategory.indexOf(foundCategory)].totalFootprint) += parseFloat(entity.footprint)
      } else {
        let newCategoryEntity = {
          category: entity.category,
          totalFootprint: entity.footprint
        }
        entitiesGroupedByCategory = [...entitiesGroupedByCategory, newCategoryEntity]
      }

      if (foundElement) {
        let originalNumber = parseFloat(entitiesGroupedByElements[entitiesGroupedByElements.indexOf(foundElement)].totalFootprint)
        let newNumber = parseFloat(entity.footprint)
        entitiesGroupedByElements[entitiesGroupedByElements.indexOf(foundElement)].totalFootprint = (originalNumber + newNumber).toString()
        // entitiesGroupedByElements[entity.name].totalFootprint += entity.footprint
      } else {
        let newSingleEntity = {
          name: entity.name,
          totalFootprint: entity.footprint
        }
        entitiesGroupedByElements = [...entitiesGroupedByElements, newSingleEntity]
      }
    })


    entitiesGroupedByCategory.forEach(element => {
      if (element.totalFootprint > 0) {
        categoryOptions.labels = [...categoryOptions.labels, element.category]
        categorySeries = [...categorySeries, parseFloat(element.totalFootprint)]
      }
    })

    entitiesGroupedByElements.forEach(element => {
      if (element.totalFootprint > 0) {
        elementOptions.labels = [...elementOptions.labels, element.name]
        elementSeries = [...elementSeries, parseFloat(element.totalFootprint)]

        positiveSeries += parseFloat(element.totalFootprint)
      } else negativeSeries += parseFloat(element.totalFootprint)
    })

    console.log(positiveSeries);
    console.log(negativeSeries);
    return [categoryOptions, categorySeries, elementOptions, elementSeries, [positiveSeries, -negativeSeries]]
  }

  const [categoryOptionsPie, categorySeriesPie, elementOptionsPie, elementSeriesPie, seriesDonut] = prepareData()

  return (
    <div>
      <br />
      <h1>Your stats:</h1>
      <div style={{ height: "50px" }}></div>
      <Example />
      <Container fluid>
        <Row>
          <Col lg={8}>
            <Chart type="line" series={series} options={options} height="300" width="100%" />
          </Col>
          <Col lg={4}>
            <Card style={{ width: '18rem' }}>
              {entitiesGroupedByElements && <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Top polution sources</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant="flush">
                      {entitiesGroupedByElements.filter(item => item.totalFootprint > 0).map((item, key) => {
                        return <ListGroup.Item>{item.name} | {item.totalFootprint} kg CO2</ListGroup.Item>
                      })}
                      {/* <ListGroup.Item>Battery</ListGroup.Item>
                      <ListGroup.Item>Cans</ListGroup.Item> */}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Achievements</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item ><Row>
                        <Col sm={4}><img className="img-badge" src={week} alt="1week" /></Col>
                        <Col sm={8}>1 week with 0 Carbon Footprint! </Col>
                      </Row>
                      </ListGroup.Item>
                      <ListGroup.Item variant="secondary"><Row >
                        <Col sm={4} ><Image className="img-badge" src={month} alt="1month" /></Col>
                        <Col sm={8} >  1 month with 0 Carbon Footprint! </Col>
                      </Row>
                      </ListGroup.Item>
                      <ListGroup.Item variant="secondary"><Row>
                        <Col sm={4}><Image className="img-badge" src={tmonths} alt="3months" /></Col>
                        <Col sm={8}>3 months with 0 Carbon Footprint! </Col>
                      </Row>
                      </ListGroup.Item>
                      <ListGroup.Item variant="secondary" ><Row>
                        <Col sm={4}><Image className="img-badge" src={smonths} alt="6months" /></Col>
                        <Col sm={8}>6 months with 0 Carbon Footprint! </Col>
                      </Row>
                      </ListGroup.Item>
                      <ListGroup.Item variant="secondary"><Row>
                        <Col sm={4} ><Image className="img-badge" src={year} alt="1year" /></Col>
                        <Col sm={8}>1 year with 0 Carbon Footprint! </Col>
                      </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> }

            </Card>
          </Col>
        </Row>
        <br />
        <Row>

          <Col lg={6}>
            <Chart type="donut" series={seriesDonut} options={optionsProgress} width="400" />
          </Col>

          {/* <Col lg={6}>
            {entities && <Chart options={elementOptionsPie} series={elementSeriesPie} type="pie" width="400" />}
          </Col> */}

          <Col lg={6}>
            <h3>Waste by percentage:</h3>
            {entities && <Chart options={categoryOptionsPie} series={categorySeriesPie} type="pie" width="400" />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard