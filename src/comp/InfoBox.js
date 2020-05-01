import React, {Component} from "react";
import * as ReactBootStrap from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Image from 'react-bootstrap/Image';
import TwitterCircle from '../img/twitter_circle.svg';
import LinkedInIcon from '../img/linkedin.svg';
import GitHubIcon from '../img/github.svg';

class InfoBox extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      user:  props.data.user
      }
    }

  render() { 
    return (
      <Container>
        <Row>
          <Col xs={4}>
          <Card style={{ width: '18rem' }}>
              <div className="cardImg" style={{backgroundImage: "url("+ this.props.data.user.profile_banner_url +")" }}>
                <div className="cardProfileImgBack" style={{backgroundImage: `url(${TwitterCircle})` }}>
                  <div className="cardImgContent">
                    <Image src={this.props.data.user.profile_image_url_https} roundedCircle />
                  </div>
                </div>
              </div>

              <Card.Body>
                <Card.Title><strong>{this.props.data.user.name}</strong></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">@{this.props.data.user.screen_name}</Card.Subtitle>
                <Card.Text>{this.props.data.user.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem><strong>Twitter Information</strong></ListGroupItem>
                <ListGroupItem>Joined: {this.props.data.user_joined}</ListGroupItem>
                <ListGroupItem>Follower: {this.props.data.user.followers_count}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button target="_blank" href={"https://twitter.com/" + this.props.data.user.screen_name}>Twitter Homepage</Button> 
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <div className="analysisBannerImg">
                <div className="analysisBannerContent">
                  <h3>Tweet Analysis - NLP</h3>
                  <p>{this.props.data.start_analysis} to {this.props.data.end_analysis}</p>
                  <p>Number of tweets analysed: {this.props.data.n_tweets_analysed}</p>
                </div>
            </div>
            <Table striped bordered hover>
              <thead>
              <tr>
                  <th>Entity</th>
                  <th>Times mentioned</th> 
                  <th>Total likes</th>
                  <th>Average Sentiment</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td><a target="_blank" href= {this.props.data.google_hrefs[0]}>{this.props.data.entities[0]}</a></td>
                  <td>{this.props.data.entity_count[0]}</td>
                  <td>{this.props.data.fav_cnts[0]}</td>
                  <td>{(Math.round(this.props.data.sentiments[0] * 10) / 10).toFixed(2)}</td>
              </tr>
              <tr>
                  <td><a target="_blank" href= {this.props.data.google_hrefs[1]}>{this.props.data.entities[1]}</a></td>
                  <td>{this.props.data.entity_count[1]}</td>
                  <td>{this.props.data.fav_cnts[1]}</td>
                  <td>{(Math.round(this.props.data.sentiments[1] * 10) / 10).toFixed(2)}</td>
              </tr>
              <tr>
                  <td><a target="_blank" href= {this.props.data.google_hrefs[2]}>{this.props.data.entities[2]}</a></td>
                  <td>{this.props.data.entity_count[2]}</td>
                  <td>{this.props.data.fav_cnts[2]}</td>
                  <td>{(Math.round(this.props.data.sentiments[2] * 10) / 10).toFixed(2)}</td>
              </tr>
              <tr>
                  <td><a target="_blank" href= {this.props.data.google_hrefs[3]}>{this.props.data.entities[3]}</a></td>
                  <td>{this.props.data.entity_count[3]}</td>
                  <td>{this.props.data.fav_cnts[3]}</td>
                  <td>{(Math.round(this.props.data.sentiments[3] * 10) / 10).toFixed(2)}</td>
              </tr>
              <tr>
                  <td><a target="_blank" href= {this.props.data.google_hrefs[4]}>{this.props.data.entities[4]}</a></td>
                  <td>{this.props.data.entity_count[4]}</td>
                  <td>{this.props.data.fav_cnts[4]}</td>
                  <td>{(Math.round(this.props.data.sentiments[4] * 10) / 10).toFixed(2)}</td>
              </tr>
              </tbody>
            </Table>
          </Col>
        </Row>


        <Row className="justify-content-md-center">
          <a className="authorBar"> Made by <strong>Fabrizio Puzzo</strong></a>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="1">
            <a className="smIconBar" style={{backgroundImage: "url("+ LinkedInIcon +")" }} target="_blank" href= "https://www.linkedin.com/in/fabrizio-puzzo/">
            </a>
          </Col>
          <Col xs lg="1">
            <a className="smIconBar" style={{backgroundImage: "url("+ GitHubIcon +")" }} target="_blank" href= "https://github.com/FabrizioPuzzo">
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default InfoBox;

/*<p> Tweets analysed from {this.props.data.start_analysis} to {this.props.data.end_analysis}</p>
xs lg="6"

*/