import React from "react";
import { FiSunset, FiSunrise } from "react-icons/fi"

import {
  Container,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col, 
  Card
} from "reactstrap"


export default function Weather({
  weatherObj,
  locationObj,
  symbol,
}) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let d = new Date();
  let dayName = days[d.getDay()];
  let dayIndex = days.indexOf(dayName);
  return( 
      <Container color="primary" fluid={true}>
        {
          locationObj.city && weatherObj.list && 
          <h3 className="text-center">{locationObj.city + ", " + weatherObj.city.country}</h3>
        }
        <Row>
        {
        weatherObj && weatherObj.list && 
        weatherObj.list.map(
        day => 
            <Col className="m-0 justify-content-between" key={dayIndex} xs="12" sm="6" md="4" lg="3">
              <Card className="m-0 mt-3 bg-light text-dark" key={days[(dayIndex) % 7]}>
                <CardHeader>
                  <CardTitle><h4>{days[(dayIndex ++) % 7]}</h4></CardTitle>
                  <CardSubtitle><span>{day.weather[0].description}</span></CardSubtitle>
                </CardHeader>
                {
                  <CardBody>
                    
                    <div style={{display: "flex", alignItems: "center"}}>Current: &nbsp;{parseInt(day.temp.day)}{symbol}</div>
                    <div style={{display: "flex", alignItems: "center"}}>Min: &nbsp;{parseInt(day.temp.min)}{symbol}</div>
                    <div style={{display: "flex", alignItems: "center"}}>Max: &nbsp;{parseInt(day.temp.max)}{symbol}</div>
                    <p className="mb-0">Humidity: &nbsp;{day.humidity}%</p>
                    <p className="mb-0">Sunrise({<FiSunrise/>}): {new Date(day.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <p className="mb-0">Sunset({<FiSunset />}): {new Date(day.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                  </CardBody>
                }
              </Card>
            </Col>
          )}
        </Row> 
      </Container>
  )}