import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CanvasJSReact from "../../lib/canvasjs.react";

import { data } from "./dummyApiResponse.js";

import NycBackground from "../../assets/images/nyc.png";

import "../../styles/styles.css";

/** Covid graph */
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
  animationEnabled: true,
  exportEnabled: true,
  theme: "light2", // "light1", "dark1", "dark2"
  title: {
    text: ""
  },
  axisY: {
    title: "Active Cases",
    fontSize: "8px",
    includeZero: true,
    suffix: ""
  },
  axisX: {
    title: "Days",
    prefix: "",
    interval: 2
  },
  data: [
    {
      type: "spline",
      toolTipContent: "Day {x}: {y}",
      connectNullData: true,
      dataPoints: data.cases
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

const Dashboard = () => {
  return (
    <Container
      style={{
        fontFamily: "Gill Sans MT"
      }}
    >
      <ImageHeader src={NycBackground} alt={"NYC"} />
      <h1>Hello dashboard</h1>
      <Link to="/itinerary">Go to Itinerary</Link>
      <br />
      <RiskIndicator>
        <RiskIndicatorLeft>COVID-19 Risk</RiskIndicatorLeft>
        <RiskIndicatorRight>
          {data ? data.risk : "Loading..."}
        </RiskIndicatorRight>
      </RiskIndicator>
      <CanvasJSChart
        options={options}
        /* onRef = {ref => this.chart = ref} */
      />
    </Container>
  );
};

export default Dashboard;
