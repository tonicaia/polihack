import React, { Component, useState } from 'react';
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import { Card, ListGroup, Row, Col, Container, Toast, Button, ToastContainer } from 'react-bootstrap'

const optionsPie = { labels: ["Food", "Electronics", "Clothes", "Plastics", "Others"] };
const seriesPie = [4, 5, 6, 1, 5]; //our data

const series = [
  {
    name: "Carboon Footprint",
    data: [19, 22, 20, 26, 28, 22, 20, 23]
  }
];
const options = {
  xaxis: {
    categories: ["2021-05-01", "2021-05-02", "2021-05-03", "2021-05-04", "2021-05-05", "2021-05-06", "2021-05-07", "2021-05-08"]
  }
};

const seriesProgress = [70]; //70 percent
const optionsProgress = {
  labels: ["Until 0 CO2"], //label of this diagram
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
          </ToastContainer>
        </Col>
      </Row>
    </Container>
  );
}


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    }
  }
  render() {
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
                <Card.Header>Your top 3 pollution sources</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Banana</ListGroup.Item>
                  <ListGroup.Item>Battery</ListGroup.Item>
                  <ListGroup.Item>Cans</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>

            <Col lg={6}>
              <Chart type="radialBar" series={seriesProgress} options={optionsProgress} width="400" />
            </Col>

            <Col lg={6}>
              <Chart options={optionsPie} series={seriesPie} type="pie" width="400" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard