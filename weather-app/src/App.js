import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import sampleData from "./data/sample.json";
import SearchBar from "./components/SearchBar";
import DayCard  from "./components/DayCard";
import DayDetails from "./components/DayDetails";
import moment from "moment";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    // location:"",
    // days: [],
    location:"Denver,CO",
    days: sampleData.data,
    selectedDay: {},
    searchTerm: ""
  });

  const { location, days, selectedDay, searchTerm } = weatherInfo;

  return (
    <Container>
        <Row>
          <Col md={7}><h2>Weather for {location}</h2></Col>
          <Col md={5}><SearchBar /></Col>
        </Row>
        <Row>
            {days.map(day => (
              <Col key={day.valid_date}>
                <DayCard 
                  icon={day.weather.icon}
                  description={day.weather.description}
                  high={day.high_temp}
                  low={day.low_temp}
                  temp={day.temp}
                  precip={day.pop}
                  day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}

                />
              </Col>
            ))}
        </Row>
        <Row>
          <Col>
            <DayDetails />
          </Col>
        </Row>
    </Container>
  );
}

export default App;
