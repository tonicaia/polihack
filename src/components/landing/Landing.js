import React, { Component, useState } from 'react';
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import { Card, ListGroup, Row, Col, Container, Toast, Button, ToastContainer } from 'react-bootstrap'
import "./Landing.css"
import logo from "./logo.png"

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div id="parallax-world-of-ugg">
        <section>
    <div class="parallax-one">
      <h2>
      <img src={logo}></img>
      </h2>
    </div>
</section>

<section>
  <div class="block">
    <p><span class="first-character sc">I</span>n It is well known that our planet is increasingly in need of people to tackle environmental and pollution control techniques. We have identified an area that can be easily approached to help create a brighter future for our planet. The counter that will help us achieve this goal is the carbon footprint. But at the same time, each person has a significant role to play in this process. Knowing the carbon footprint, whether personal or organizational, is useful for several reasons: it allows the identification and reduction of CO2 emissions, and for corporations to publish environmental performance statistics. This information can be used to raise awareness of environmental costs.</p>
    <p class="line-break margin-top-10"></p>
    <p class="margin-top-10">WasteCAN aims to raise individual awareness of people for low consumption of all daily waste and, of course, in the long run, to reduce carbon emissions from daily activities. The best way to Through small actions we can save the planet!</p>
  </div>
</section>

<section>
  <div class="parallax-two">
    <h2>What we offer</h2>
  </div>
</section>

<section>
  <div class="block">
    <p><span class="first-character ny">O</span>ur application allows the identification, visualization and tracking of waste made by the user in relation to the carbon footprint of each product introduced. Obtaining the information provided can lead to the acquisition of a set of processes and practices that allow a person or organization to reduce the impact on the environment and increase operational efficiency.</p>
    <p class="line-break margin-top-10"></p>
    <p class="margin-top-10">Our users have access to statistics based on their consumption and access to various ways to reduce carbon emissions, once the statistics show that the percentage has decreased. We also ensure the waste pick-up services for our enthusiast users. One big advantage of WasteCAN is the centralization of several categories of objects that produce CO2 emissions, incorporated in a single platform.
</p>
  </div>
</section>

<section>
  <div class="parallax-three">
    <h2>Brightening the future through green solutions</h2>
  </div>
</section>

<section>
  <div class="block">
    <p>We are a group of 4 students, ready to offer to our users the best experience through decreasing waste of their daily activities.</p>
    <p class="line-break margin-top-10"></p>
    <p class="margin-top-10">Toni, Diana, Flaviu, Scriti and add some pics.</p>
  </div>
</section>

        <section>
          <div class="block">
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10">
            <div class="donate-link">
  <a href="#" class="btn-paypal" target="_blank">
    <i class="fa fa-lock donate-padlock-icon"></i> <span>Donate</span>
  </a>
  <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" class="donate-image"/>
</div>
            </p>
          </div>
        </section>

      </div>
    );
  }
}

export default Landing;