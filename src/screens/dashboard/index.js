import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CanvasJSReact from "../../lib/canvasjs.react";
import newsData from './newsData';
import communityData from './communityData';
import ratingsData from './ratingsData';
import { data } from "./dummyApiResponse.js";
import Header from '../../common/header';
import NewsFeed from '../../common/newsFeed';
import CommunityFeed from '../../common/communityFeed';
import Ratings from '../../common/ratings';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
import {Button} from '@material-ui/core';
import Questionnaire from '../../common/questionnaire';

import NycImage from "../../assets/images/nyc.png";
import ChinaImage from "../../assets/images/china.jpg";
import JapanImage from "../../assets/images/japan.jpg";

/** Covid graph */
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
  animationEnabled: true,
  exportEnabled: false,
  theme: "light2", // "light1", "dark1", "dark2"
  width: "400",
  height: "250",
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


const RiskIndicator = styled.div`
  border-radius: 10px;
  width: 200px;
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
    grid-template-rows: 500px 500px;

`

const CardRowGlobal = styled.div`
    display:grid;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: minmax(400px, 700px) minmax(500px, 900px) 450px;
`

const RiskContainer = styled.div`
    display: flex; 
    justifyContent: end;
    margin: 20px 0;
`

const StyledButton = styled(Button)`
  position: absolute;
  left: 200px;
`
const CardHeaderWrapperCovid = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
`

/** global dashboard */
const CountryImage = styled.div`
  width: ${props => props.large ? "100px" : "70px"};
  height: ${props => props.large ? "100px" : "70px"};
  background: url(${(props)=>props.src}) center;
  background-size: cover;
  border-radius: 10px 10px 10px 10px;
  justify-self: end;
`

const CardSubHeader = styled.div`
  margin: 0px 0px 16px 16px;
`

const ListEntryCountryWatch = styled.div`
  width: 95%;
  display:grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: 30% 50% 20%;
`

const ListEntryCountryOverview = styled.div`
  width: 100%;
  display:grid;
  grid-column-gap: 20px;
  grid-row-gap: ${props => props.large ? "20px" : "10px"};
  grid-template-rows: ${props => props.large ? "40% 40px" : "25% 40px"};
`

const ListEntryCountryName = styled.div`
  width: 100%;
  display:grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: 30% 60%;
`

const ListEntryDetails = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
`

const ListEntryDetailsRow = styled.div`
  display: flex;
`

const HighlightedFigure = styled.div`
  font-size: ${props => props.large ? "24px" : props.small ? "16px" : "20px"};
  color: #66bb6a;
  margin-right: 3px;
`

const RankingNumber = styled.div`
  font-size: ${props => props.large ? "28px" : "18px"};
`

const SafetyRating = styled.div`
  background: orange;
  border-radius: 5px;
  color: white;
  padding: 3px 6px;
`

const SafetyRatingLabel = styled.div`
  font-size: 9px;
`

const SafetyRatingValue = styled.div`
  font-size: 20px;
  display: flex;
  align-items: flex-end;
`

const SafetyRatingValueTotal = styled.div`
  font-size: 10px;
  line-height: 16px;
`

const Rating = styled.div`
  display: flex;
`

const RatingCircle = styled.div`
  background: orange;
  border: 2px solid #2196f3;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  margin-right: 6px;
`
const RatingLabel = styled.div`
  font-size: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`


const StyledCardContent = styled(CardContent)`
    max-height: 420px;
    overflow: scroll;
`

const Dashboard = () => {
    const [globalTab, setGlobalTab] = useState(true);
    const handleToggleActiveTab = () => {
        setGlobalTab(!globalTab);
    };
 
  
    return (
      <>
        <Header handleToggleActiveTab={handleToggleActiveTab} />
        <Questionnaire></Questionnaire>
        {!globalTab && <DashboardContainer>

        <CardRow>
            
            <Card>
            <CardHeader title="News Feed" />
            
            <Divider/>
                <StyledCardContent>
                    
                    <NewsFeed news={newsData}></NewsFeed>
                </StyledCardContent>
            </Card>
            <Card>
            <CardHeader title="Community Feed" />
                <Divider/>
                <StyledCardContent>
                    
                    <CommunityFeed reviews={communityData}></CommunityFeed>
                </StyledCardContent>
            </Card>
            <Card>
            

            <CardHeader title="Safety Measures" />
            <Divider/>
            <StyledCardContent>
                    
                    <Ratings ratings={ratingsData}></Ratings>
                </StyledCardContent>
                
            </Card>

            <Card>
            <CardHeaderWrapperCovid>
            <CardHeader title="COVID-19 Tracker" />
            <RiskIndicator>
                <RiskIndicatorLeft>Risk Level:</RiskIndicatorLeft>
                <RiskIndicatorRight>
                    {data ? data.risk : "Loading..."}
                </RiskIndicatorRight>
                </RiskIndicator>
                </CardHeaderWrapperCovid>
            <Divider/>
                <StyledCardContent>
                <div style={{ width: "45%", minWidth: "300px" }}>
                    <CanvasJSChart
                    options={options}
                    /* onRef = {ref => this.chart = ref} */
                    />
                </div>
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
                </StyledCardContent>
            </Card>
        </CardRow>
        </DashboardContainer>}
     {globalTab && 
        <DashboardContainer>
            <CardRowGlobal>
                <Card>
                <CardHeader title="Global Updates" />
                <Divider/>
                    <CardContent>
                        
                        <NewsFeed></NewsFeed>
                    </CardContent>
                </Card>
                <Card>
                <CardHeader title="Country Watch" />
                <CardSubHeader>Check out which countries make the best travel destinations right now</CardSubHeader>
                <Divider/>
                <CardContent>
                  <List>
                        <ListItem divider>
                            <ListEntryCountryWatch>
                              <ListEntryCountryOverview large>
                              <ListEntryCountryName large><RankingNumber large>#1</RankingNumber><div>New Zealand</div></ListEntryCountryName>
                              <SafetyRating><SafetyRatingLabel>TRAVEL RATING</SafetyRatingLabel>
                              <SafetyRatingValue>
                                <div>89</div>
                                <SafetyRatingValueTotal>/100</SafetyRatingValueTotal>
                              </SafetyRatingValue>
                              </SafetyRating>
                              </ListEntryCountryOverview>
                              
                              <div>
                                <div><HighlightedFigure large>60% fewer</HighlightedFigure> active cases of COVID-19</div>
                                <div><HighlightedFigure large>24% lower</HighlightedFigure> prices for travel and hotels</div>
                              </div>
                              <CountryImage large src={NycImage}/>
                            </ListEntryCountryWatch>                            
                        </ListItem>
                        <ListItem divider>
                            <ListEntryCountryWatch>
                            <ListEntryCountryOverview>
                              <ListEntryCountryName><RankingNumber>#2</RankingNumber><div>China</div></ListEntryCountryName>
                              <SafetyRating><SafetyRatingLabel>TRAVEL RATING</SafetyRatingLabel>
                              <SafetyRatingValue>
                                <div>84</div>
                                <SafetyRatingValueTotal>/100</SafetyRatingValueTotal>
                              </SafetyRatingValue>
                              </SafetyRating>
                              </ListEntryCountryOverview>
                                <ListEntryDetails>
                                  <ListEntryDetailsRow><HighlightedFigure>40% </HighlightedFigure><HighlightedFigure small>fewer</HighlightedFigure> active cases</ListEntryDetailsRow>
                                  <ListEntryDetailsRow><HighlightedFigure>37% </HighlightedFigure><HighlightedFigure small>lower</HighlightedFigure> prices</ListEntryDetailsRow>
                                </ListEntryDetails>
                              <CountryImage src={ChinaImage}/>
                            </ListEntryCountryWatch>                            
                        </ListItem>
                        
                        <ListItem divider>
                            <ListEntryCountryWatch>
                            <ListEntryCountryOverview>
                              <ListEntryCountryName><RankingNumber>#3</RankingNumber><div>Japan</div></ListEntryCountryName>
                              <Rating><RatingCircle>79</RatingCircle><RatingLabel><div>TRAVEL</div> RATING</RatingLabel></Rating>
                              </ListEntryCountryOverview>
                                <ListEntryDetails>
                                  <ListEntryDetailsRow><HighlightedFigure>46% </HighlightedFigure><HighlightedFigure small>fewer</HighlightedFigure> active cases</ListEntryDetailsRow>
                                  <ListEntryDetailsRow><HighlightedFigure>29% </HighlightedFigure><HighlightedFigure small>lower</HighlightedFigure> prices</ListEntryDetailsRow>
                                </ListEntryDetails>
                              <CountryImage src={JapanImage}/>
                            </ListEntryCountryWatch>                            
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
            </CardRowGlobal>

        </DashboardContainer>}
    </>
    );
  }



export default Dashboard;
