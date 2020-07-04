import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import Button from '@material-ui/core/Button';
import events from './data';
import {Link} from 'react-router-dom';
import coverPhoto from '../../assets/images/brooklyn.jpeg';

import AddIcon from '@material-ui/icons/Add';


const Container = styled.div`
  display: grid;
  justify-content: center;
`

const CalendarContainer = styled.div`
    width: 80vw;
    height: 100%;
    && .fc-bg-event.priority{
        z-index: 3;
    }
    && .fc-bg-event{
        opacity: 0.6 !important;
        & .fc-event-title{
            color: rgba(0,0,0,1);
            font-weight: 700;
        }
    }
`

const Header = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 40px 0;
    position: relative;
`
const LocationHero = styled.img`
    width: 80%;
    border-radius: 15px;
    margin: auto 0;
    filter: brightness(0.7);
`
const StyledH1 = styled.h1`
    color: #fff;
    font-size: 45px;
`

const StyledButton = styled(Button)`

`
const StyledLink = styled(Link)`
  text-decoration: none;
`
const HeaderTextContainer = styled.div`
    position: absolute;
    left: 13%;
    top: 15%;
`
const StyledH2 = styled.h2`
    color: #fff;
`
const StyledH3 = styled.h3`
    color: #fff;
`
const HeaderActions = styled.div`
    position absolute;
    top: 80%;
    display: grid;
    left:78%;
`

const AddButton = styled(Button)`
    border-color: white !important;
    color: white !important;
`



const Itinerary = () => {
    return (
        <>
        <Header>
            <LocationHero src={coverPhoto}></LocationHero>
            <HeaderTextContainer>
                <StyledH1>Brooklyn Baby</StyledH1>
                <StyledH2>Jul 5 - Jul 7, 2020</StyledH2>
                <StyledH3>New York City, USA</StyledH3>
            </HeaderTextContainer>
            <HeaderActions>
                <AddButton variant="outlined">Add Itinerary <AddIcon/></AddButton>
            </HeaderActions>
        </Header>
        <Container>
            <StyledLink to="/dashboard">
                <StyledButton color="primary" variant="contained" >
                     Return to Dashboard
                </StyledButton>
            </StyledLink>


            <CalendarContainer>
                <FullCalendar headerToolbar={{left: false}} events={events} plugins={[timeGridPlugin]} initialView="timeGridWeek"/>
            </CalendarContainer>

        </Container>
        </>
      );
}

export default Itinerary;