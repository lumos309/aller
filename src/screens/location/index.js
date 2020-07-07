import React, { Component } from "react";
import styled from "styled-components";
import features from './features';
import reviews from './reviews';
import Header from '../../common/header';
import ContactlessFeatures from '../../common/contactlessFeatures';
import Reviews from '../../common/reviews';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';

import HotelImage from "../../assets/images/hotel.jpg";

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
    grid-template-columns: repeat(2, minmax(400px, 400px)) ;
    grid-template-rows: 500px 500px;
`

const CardSubHeader = styled.div`
  margin: 0px 0px 16px 16px;
`


const StyledCardContent = styled(CardContent)`
    max-height: 420px;
    overflow: scroll;
`

class Location extends Component {
  constructor() {
    super();
    this.state = {
      isGlobalTab: false
    };
  }

  toggleActiveTab = e => {
    this.setState({
      isGlobalTab: !this.state.isGlobalTab
    });
  };

  render() {
    return (
      <>
        <Header isLocation coverPhoto={HotelImage} locationName={"Hard Rock Hotel"} locationValue={"New York City, USA"}/>
        <DashboardContainer>
          
            <CardRow>
                
                <Card>
                <CardHeader title="Contactless Features" />
                <CardSubHeader>Digital or automated services to reduce human contact and keep you safe.</CardSubHeader>
                <Divider/>
                    <StyledCardContent>
                        <ContactlessFeatures features={features} />
                        
                    </StyledCardContent>
                </Card>
                <Card>
                <CardHeader title="User Reviews" />
                <CardSubHeader>Hear from travellers who have stayed here recently.</CardSubHeader>
                    <Divider/>
                    <StyledCardContent>
                        <Reviews reviews={reviews} />
                        
                    </StyledCardContent>
                </Card>
                
            
            
            </CardRow>
            
        </DashboardContainer>
      </>
    );
  }
}

export default Location;
