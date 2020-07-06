import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import Button from '@material-ui/core/Button';
import events from './data';
import {Link} from 'react-router-dom';
import Header from '../../common/header';

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

const StyledButton = styled(Button)`

`
const StyledLink = styled(Link)`
  text-decoration: none;
`


const Itinerary = () => {
    return (
        <>
        <Header/>
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