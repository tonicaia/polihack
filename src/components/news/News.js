import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Image} from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import bgimg from '../../assets/bg.jpg'
import './News.scss'
const API_KEY = "77942a49037a4103a810e5197200c66a"
const URL = "https://newsapi.org/v2/everything?q=(pollution OR sustainability OR forest OR waste)&sortBy=popularity&apiKey=" + API_KEY
let articles = []
class News extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {

        }
    }
    componentDidMount() {
        fetch(URL)
            .then(respone => respone.json())
            .then(data => {
                articles = data.articles
                console.log(articles)
            })
            .catch(error => console.log(error))
    }

//     author: "Katie Benner, David E. Sanger and Julian E. Barnes"
// content: "The government phones that have been targeted so far have been unclassified, and there is no indication that the NSO exploits have been used to gain access to classified information, a senior adminis… [+1657 chars]"
// publishedAt: "2021-12-04T00:48:42Z"
// urlToImage: "https://static01.n
    render() {
        return (
            <div  className="wrapper justify-content-md-center" style={{alignContent:"center"}}>
              
                {   
                    articles && articles.map((article) =>
                    <Row style={{marginTop:"25px", maxWidth:"50%"}}>
                    <Card  className="glass" variant="outlined">
                    <Card.Header as="h5">{article.title}</Card.Header>
                    <Card.Body>
                      <Card.Text>
                         { article.urlToImage && <Image src= {article.urlToImage} fluid></Image>}
                         <br />
                         <br />
                        {article.content}
                      </Card.Text>
                      <p style={{float:"left"}}>{article.source && article.source.name}</p>
                      <a href={article.url}>
                    <Button style={{margin:"10px", float:"right"}} variant="primary" >View more...</Button>
                    </a>
                    </Card.Body>
                    
                  </Card>
                  </Row>
                    )
                    }

            </div>);
    }
}

export default News;