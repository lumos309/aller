import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import Button from '@material-ui/core/Button';
import events from './data';
import {Link} from 'react-router-dom';
const Container = styled.div`
  display: grid;
  justify-content: center;
`

const CalendarContainer = styled.div`
    width: 80vw;
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
        <Container>
            <StyledLink to="/dashboard">
                <StyledButton variant="contained" >
                     Return to Dashboard
                </StyledButton>
            </StyledLink>
            <h1>New York, USA</h1>

            <CalendarContainer>
                <FullCalendar events={events} plugins={[timeGridPlugin]} initialView="timeGridWeek"/>
            </CalendarContainer>

        </Container>
      );
}

export default Itinerary;