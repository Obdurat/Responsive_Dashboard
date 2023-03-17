import styled from 'styled-components';

export const calendarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;

  .fc {
    width: 100%;
    margin-top: 1rem;
  }

  .fc-header-toolbar {
    display: flex;
    justify-content: space-around;
  }

  .fc-toolbar-title {
    font-size: 1.4rem;
  }

  .fc-view-harness {
    flex-grow: 1;
    width: 95%;
    margin: 0 2.5%;
  }

  .fc-button {
    font-size: 0.7rem;
  }

`;
