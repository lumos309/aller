import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

const Container = styled.div`
  display: grid;
  justify-content: center;

`

const CalendarContainer = styled.div`
    width: 80vw;
`
const Itinerary = () => {
    return (
        <Container>
            <h1>Hello Itinerary</h1>
            <CalendarContainer>
                <FullCalendar plugins={[timeGridPlugin]} initialView="timeGridWeek"/>
            </CalendarContainer>

        </Container>
      );
}

export default Itinerary;