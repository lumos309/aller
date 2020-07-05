import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CanvasJSReact from "../../lib/canvasjs.react";

import { data } from "./dummyApiResponse.js";

import NycBackground from "../../assets/images/nyc.png";
import { render } from "@testing-library/react";

/** Covid graph */
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
  animationEnabled: true,
  exportEnabled: true,
  theme: "light2", // "light1", "dark1", "dark2"
  width: "300",
  height: "300",
  title: {
    text: ""
  },
  axisY: {
    title: "New Cases Per Day",
    interval: 250,
    fontSize: "8px",
    includeZero: true,
    suffix: "",
    gridThickness: 0.5,
    tickThickness: 0.5,
    labelFontFamily: "Gill Sans MT",
    titleFontFamily: "Gill Sans MT"
  },
  axisX: {
    title: "Days From Today",
    prefix: "",
    interval: 3,
    labelFontFamily: "Gill Sans MT",
    titleFontFamily: "Gill Sans MT"
  },
  data: [
    {
      nullDataLineDashType: "shortDash",
      type: "spline",
      toolTipContent: "Day {x}: {y}",
      connectNullData: true,
      dataPoints: data.casesPerDay,
      markerSize: 1,
      markerColor: "orange",
      lineColor: "orange"
    }
  ]
};

const calculateProjectedCases = days => {
  if (!data || !data.casesPerDay) return "Loading...";
  // really messy :')
  let dayNumbers = [];
  for (let i = 0; i < days; i++) {
    dayNumbers.push(i);
  }
  let total = 0;
  for (let dataPoint in data.casesPerDay) {
    if (data.casesPerDay[dataPoint].x in dayNumbers) {
      total += data.casesPerDay[dataPoint].y;
    }
  }
  return total;
};

const Container = styled.div`
  display: grid;
  justify-content: center;
`;

const ImageHeader = styled.img`
  border-radius: 20px;
  width: 700px;
`;

const RiskIndicator = styled.div`
  border-radius: 10px;
  width: 250px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
`;

const RiskIndicatorLeft = styled.div`
  width: 50%;
  border-radius: 15px 0px 0px 15px;
  border: 1px solid orange;
  text-align: center;
  line-height: 30px;
`;

const RiskIndicatorRight = styled.div`
  width: 50%;
  border-radius: 0px 15px 15px 0px;
  background: orange;
  color: white;
  text-align: center;
  line-height: 30px;
`;

const DataRow = styled.div`
  font-weight: 600;
`;
const StyledButton = styled(Button)``;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NearbyEvent = styled.div`
  width: 400px;
  height: 100px;
  border-radius: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

const Tab = styled.button`
  background: ${props => (props.isSelected ? "white" : "#DDD")};
  border-radius: 5px 5px 0px 0px;
  height: 30px;
  padding: 5px 10px;
  outline: none;
  border: none;
  font-family: "Gill Sans MT";
  font-size: 16px;
`;

const ContentPanel = styled.div`
  padding: 25px 10px 10px 10px;
  background: white;
  border-radius: 20px;
  min-height: 400px;
`;

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: "tracker"
    };
  }

  toggleActiveTab = e => {
    this.setState({
      activeTab: e.target.value
    });
  };

  render() {
    return (
      <Container
        style={{
          fontFamily: "Gill Sans MT"
        }}
      >
        <ImageHeader src={NycBackground} alt={"NYC"} />
        <h1>Hello dashboard</h1>
        <StyledLink to="/itinerary">
          <StyledButton color="primary" variant="contained">
            Go to Itinerary
          </StyledButton>
        </StyledLink>
        <br />
        <div style={{ background: "#b3e5fc", padding: "10px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Tab
              isSelected={this.state.activeTab === "tracker"}
              value={"tracker"}
              onClick={this.toggleActiveTab}
            >
              COVID-19 Tracker
            </Tab>
            <Tab
              isSelected={this.state.activeTab === "happenings"}
              value={"happenings"}
              onClick={this.toggleActiveTab}
            >
              Recent Happenings Near Your Destinations
            </Tab>
          </div>
          <ContentPanel>
            {this.state.activeTab === "tracker" ? (
              <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <RiskIndicator>
                    <RiskIndicatorLeft>COVID-19 Risk</RiskIndicatorLeft>
                    <RiskIndicatorRight>
                      {data ? data.risk : "Loading..."}
                    </RiskIndicatorRight>
                  </RiskIndicator>
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <div style={{ width: "45%" }}>
                    <CanvasJSChart
                      options={options}
                      /* onRef = {ref => this.chart = ref} */
                    />
                  </div>
                  <div style={{ width: "45%" }}>
                    <DataRow>Total Cases To Date: {data.casesToDate}</DataRow>
                    <DataRow>
                      Projected (7 days): {calculateProjectedCases(7)}
                    </DataRow>
                    <DataRow>Active Cases: {data.activeCases}</DataRow>
                    <DataRow>Recovered Cases: {data.recovered}</DataRow>
                    <DataRow>Deaths: {data.deaths}</DataRow>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <NearbyEvent>
                    <h4>Metropolitan Museum of Art</h4>
                    There are protests taking place nearby. Be careful when
                    visiting this area.
                  </NearbyEvent>
                </div>
              </>
            )}
          </ContentPanel>
        </div>
      </Container>
    );
  }
}

export default Dashboard;
