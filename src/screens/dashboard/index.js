import React, { Component } from "react";
import styled from "styled-components";
import CanvasJSReact from "../../lib/canvasjs.react";

import { data } from "./dummyApiResponse.js";
import Header from '../../common/header';
import NewsFeed from '../../common/newsFeed';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
/** Covid graph */
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
  animationEnabled: true,
  exportEnabled: false,
  theme: "light2", // "light1", "dark1", "dark2"
  width: "400",
  height: "400",
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
  width: 100vw;
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
  width: 70vw;
`;

const DashboardContainer = styled.div`
    width: 80vw;
    display: flex;
    justify-content: center;
    margin: auto;

`

const CardRow = styled.div`
    display:grid;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: repeat(2, minmax(400px, 700px)) minmax(300px, 300px) 450px;
`
const RiskContainer = styled.div`
    display: flex; 
    justifyContent: end;
    margin: 20px 0;
`

const TrackerContainer = styled.div`
    display: flex;
    justifyContent: space-evenly;
    flexWrap: wrap;
`
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
      <>
        <Header/>
        <DashboardContainer>
            <CardRow>
                <Card>
                <CardHeader title="News Feed" />
                <Divider/>
                    <CardContent>
                        
                        <NewsFeed></NewsFeed>
                    </CardContent>
                </Card>
                <Card>
                <CardHeader title="Community Feed" />
                    <Divider/>
                    <CardContent>

                    </CardContent>
                </Card>
                <Card>
                <CardHeader title="Latest Stats" />
                <Divider/>
                <CardContent>
                  <RiskContainer>
                    <RiskIndicator>
                      <RiskIndicatorLeft>Risk Level:</RiskIndicatorLeft>
                      <RiskIndicatorRight>
                        {data ? data.risk : "Loading..."}
                      </RiskIndicatorRight>
                    </RiskIndicator>
                  </RiskContainer>
                  <List>
                        <ListItem divider>
                            <ListItemText primary={"Total Cases To Date: " + data.casesToDate}></ListItemText>
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary={"Projected (7 days): " + calculateProjectedCases(7)}></ListItemText>
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary={"Active Cases: " + data.activeCases}></ListItemText>
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary={"Recovered Cases: " + data.recovered}></ListItemText>
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary={"Deaths: " + data.deaths}></ListItemText>
                        </ListItem>
                    </List>
                    </CardContent>
                </Card>

                <Card>
                <CardHeader title="COVID-19 Tracker" />
                <Divider/>
                    <CardContent>
                    <div style={{ width: "45%", minWidth: "300px" }}>
                      <CanvasJSChart
                        options={options}
                        /* onRef = {ref => this.chart = ref} */
                      />
                    </div>
                    </CardContent>
                </Card>
            </CardRow>

        </DashboardContainer>
      </>
    );
  }
}

export default Dashboard;
