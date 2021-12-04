import React, { Component,useState } from 'react';
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import {Card,ListGroup,Row,Col,Container,Toast,Button, ToastContainer} from 'react-bootstrap'
import "./Price.scss"

const pricingDataAll = {

    generic: {
      general:{
      priceDesc: "every month",
      ctaText: "Get Started",
      ctaLinkPrefix : "http://www.google.com/",
      ctaSecondaryText: "purchase now",
      ctaSecondaryLinkPrefix: "http://www.bing.com/",
      description: "This is the most basic package but it's also the cheapest. Great for ordinary use."
      },
      three: {
        priceDesc: "three months of our services for 50% off!",
        ctaText: "Select",
        ctaLinkPrefix : "http://www.google.com/",
        ctaSecondaryText: "purchase now",
        ctaSecondaryLinkPrefix: "http://www.bing.com/",
        description: "This is the most basic package but it's also the cheapest. Great for ordinary use."
      },
    },

    common: {
      one: {
        description: <ol><li>Visualization of CO2 emissions for consumed items</li></ol>
      },
      two: {
        description: <ol><li>Including free plan benefits</li><li>Viewing personal statistics on CO2 emissions</li><li>Monitoring progress
        </li><li>Pick-up waste from home if requested</li></ol>
      },
      three: {
        
        description: <ol><li>Including all the benefits from free and personal plan</li><li>Collective statistics of the company</li><li>Priority waste collection regardless of size</li></ol>
      }
    },

    regular: {

      generic: {
        priceOverview: "Perfect for beginners"
        
      },

      one: {
        title: "FREE",
        price: 0,
        billingCode: "basic-regular",
        priceOverview: "Perfect for begginers",
      },
      two: {
        title: "PERSONAL",
        price: 1,
        billingCode: "advanced-regular",
        priceOverview: "For serious enthusiasts",
      },
      three: {
        title: "BUSINESS",
        price: 25 ,
        billingCode: "enterprise-regular",
        priceOverview: "Perfect for your business",
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
          generic={generic.general}
          featured
          >
          
          </PricingCard>

          <PricingCard
          pricingData={two}
          common={common.two}
          generic={generic.general}
          
          >
          </PricingCard>

          <PricingCard
          pricingData={three}
          common={common.three}
          generic={generic.three}
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
                 <span className="price__currency">€</span>
                 <span className="price__dollar">{dollar}</span>.
                 <span className="price__cent">{cent}</span>
             </h2>

             <p className="price-desc">{this.props.generic.priceDesc}</p>
             <hr></hr>
             <a className={'bttn bttn-' + this.props.btnClass} href={this.props.generic.ctaLinkPrefix + this.props.pricingData.billingCode}>{this.props.generic.ctaText}</a>
              <p className="price-overview">{this.props.pricingData.priceOverview}</p>

              <p className="description">{this.props.common.description}</p>

         </div>

    </div>
  );
}
}

export default Price