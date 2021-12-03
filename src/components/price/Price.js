import React, { Component,useState } from 'react';
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import {Card,ListGroup,Row,Col,Container,Toast,Button, ToastContainer} from 'react-bootstrap'
import "./Price.scss"

const pricingDataAll = {

    generic: {
      priceDesc: "some small print",
      ctaText: "Try Now for 30 Days",
      ctaLinkPrefix : "http://www.google.com/",
      ctaSecondaryText: "purchase now",
      ctaSecondaryLinkPrefix: "http://www.bing.com/",
      description: "This is the most basic package but it's also the cheapest. Great for ordinary use."
    },

    common: {
      one: {
        description: "This is the most basic package but it's also the cheapest. Great for ordinary use."
      },
      two: {
        description: "Best selling option. This is well suited for all around general everything."
      },
      three: {
        description: "Enterprise edition. Heavy duty awesomeness that'll handle just about anything you can throw at it, including the kitchen sink."
      }
    },

    regular: {

      generic: {
        priceOverview: "Standard Version"
      },

      one: {
        title: "Basic",
        price: 0.99,
        billingCode: "basic-regular",
        priceOverview: "Standard Version",
      },
      two: {
        title: "Advanced",
        price: 1.99,
        billingCode: "advanced-regular",
        priceOverview: "Standard Version",
      },
      three: {
        title: "Enterprise",
        price: 2.99,
        billingCode: "enterprise-regular",
        priceOverview: "Standard Version",
      }
    },

    promo: {

      generic: {
        priceOverview: ""
      },
      one: {
        title: "Basic with Extra",
        price: 1.45,
        billingCode: "basic-extra",
        priceOverview: "Includes all Extra features",
      },
      two: {
        title: "Advanced with Extra",
        price: 2.45,
        billingCode: "advanced-extra",
        priceOverview: "Includes all Extra features",
      },
      three: {
        title: "Enterprise with Extra",
        price: 3.45,
        billingCode: "enterprise-extra",
        priceOverview: "Includes all Extra features",
      }
    }

  }

class Price extends React.Component {

render() {

  return (
    <div className="App">

      <PricingCardContainer pricingDataAll={pricingDataAll}></PricingCardContainer>

    </div>
  );
}
}


class PricingCardContainer extends React.Component {

constructor(){
  super();
  this.state = {
    promo: false
  }
}

togglePromo(){
  this.setState({
    promo: !this.state.promo
  })
  console.log(!this.state.promo)
}



render() {

  let pricingDataCurrent = this.props.pricingDataAll.regular
  let common = this.props.pricingDataAll.common

  this.state.promo ? pricingDataCurrent = this.props.pricingDataAll.promo : pricingDataCurrent = this.props.pricingDataAll.regular


  const generic = this.props.pricingDataAll.generic,
        one = pricingDataCurrent.one,
        two = pricingDataCurrent.two,
        three = pricingDataCurrent.three

  return (
    <section>
      <div className="container-price">

          <PricingCard
          pricingData={one}
          common={common.one}
          generic={generic}
          >
          </PricingCard>

          <PricingCard
          pricingData={two}
          common={common.two}
          generic={generic}
          featured
          >
          </PricingCard>

          <PricingCard
          pricingData={three}
          common={common.three}
          generic={generic}
          >
          </PricingCard>

        </div>
      </section>
  );
}
}


class PricingCard extends React.Component {

render() {

    const price = this.props.pricingData.price.toString().split('.'),
            dollar = price[0]

  let	cent = price[1] || "00";

  return (
    <div className={"pricingCard " + (this.props.featured ? 'featured' : '')}>

        <div className="title">
            {this.props.pricingData.title}
        </div>

         <div className="card-price">

             <h2 className="price">
                 <span className="price__currency">$</span>
                 <span className="price__dollar">{dollar}</span>.
                 <span className="price__cent">{cent}</span>
             </h2>

             <p className="price-desc">{this.props.generic.priceDesc}</p>

              <p className="price-overview">{this.props.pricingData.priceOverview}</p>

              <p className="description">{this.props.common.description}</p>

         </div>
<a className={'bttn bttn-' + this.props.btnClass} href={this.props.generic.ctaLinkPrefix + this.props.pricingData.billingCode}>{this.props.generic.ctaText}</a>
    </div>
  );
}
}

export default Price