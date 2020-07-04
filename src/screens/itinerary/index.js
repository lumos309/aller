import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import events from './data';

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
const Itinerary = () => {
    return (
        <Container>
            <h1>New York, USA</h1>
            <CalendarContainer>
                <FullCalendar events={events} plugins={[timeGridPlugin]} initialView="timeGridWeek"/>
            </CalendarContainer>

        </Container>
      );
}

export default Itinerary;