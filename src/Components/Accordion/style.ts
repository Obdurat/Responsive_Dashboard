import styled from 'styled-components';

export const accordionContainer = styled.div`
  flex-grow: 1;
  margin: 1%;
`;

export const accordionHeader = styled.div`
  color: lightblue;
  display: flex;
  justify-content: space-around;
  background-color: grey;
  align-items: center;
  padding: 0.5rem;
  border: solid grey 2px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const accordionInfo = styled.div`
  ${(props: {open: boolean}) => props.open ? 'height: 200px; overflow: auto' : 'height: 0px; overflow: hidden'};
  display: flex;  
  flex-grow: 1;
  flex-wrap: wrap;
  flex-direction: column;
  border: solid grey 2px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: height 0.5s linear;
`;

export const buttonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`;

export const infoContent = styled.div`
  display: flex;
`;
