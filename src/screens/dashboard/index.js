import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CanvasJSReact from "../../lib/canvasjs.react";

import { data } from "./dummyApiResponse.js";

import NycBackground from "../../assets/images/nyc.png";

/** Covid graph */
var CanvasJS = CanvasJSReact.CanvasJS;
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
    title: "Active Cases",
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
    title: "Days",
    prefix: "",
    interval: 3,
    labelFontFamily: "Gill Sans MT",
    titleFontFamily: "Gill Sans MT"
  },
  data: [
    {
      type: "spline",
      toolTipContent: "Day {x}: {y}",
      connectNullData: true,
      dataPoints: data.cases,
      markerSize: 1,
      markerColor: "orange",
      lineColor: "orange"
    }
  ]
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
const StyledButton = styled(Button)`

`
const StyledLink = styled(Link)`
  text-decoration: none;
`


const Dashboard = () => {
  return (
    <Container
      style={{
        fontFamily: "Gill Sans MT"
      }}
    >
      <ImageHeader src={NycBackground} alt={"NYC"} />
      <h1>Hello dashboard</h1>
        <StyledLink to="/itinerary">
            <StyledButton color="primary" variant="contained" >
                    Go to Itinerary
            </StyledButton>
        </StyledLink>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RiskIndicator>
          <RiskIndicatorLeft>COVID-19 Risk</RiskIndicatorLeft>
          <RiskIndicatorRight>
            {data ? data.risk : "Loading..."}
          </RiskIndicatorRight>
        </RiskIndicator>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <div style={{ width: "45%" }}>
          <CanvasJSChart
            options={options}
            /* onRef = {ref => this.chart = ref} */
          />
        </div>
        <div style={{ width: "45%" }}>
          <DataRow>Total Cases To Date:</DataRow>
          <DataRow>Projected (7 days):</DataRow>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
