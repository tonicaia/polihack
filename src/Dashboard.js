import React, { Component } from 'react';
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import {Card,ListGroup} from 'react-bootstrap'

const optionsPie = { labels: ["Food", "Electronics", "Clothes", "Plastics", "Others"] };
const seriesPie = [4, 5, 6, 1, 5]; //our data
  
  const series = [
    {
      name: "Carboon Footprint",
      data: [19, 22, 20, 26]
    }
  ];
  const options = {
    xaxis: {
      categories: ["2019-05-01", "2019-05-02", "2019-05-03", "2019-05-04"]
    }
  };
 

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
                <h1>Your stats:</h1>
                <div className="col-12">
                    <Chart type="line" series={series} options={options} height="300" width="600" />;
                </div>
                <div className="donut col-6">
                    <Chart options={optionsPie} series={seriesPie} type="pie" width="380" />
                </div>
                <div>
                <Card style={{ width: '18rem' }}>
                <Card.Header>Featured</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                </Card>
                </div>
            </div>
        );
    }
}
 
export default Dashboard;