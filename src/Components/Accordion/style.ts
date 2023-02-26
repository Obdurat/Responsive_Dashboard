import styled from 'styled-components';

export const accordionContainer = styled.div`
  flex-grow: 1;
  margin: 1%;
  table {
    margin-top: 0.2rem;
    border-spacing: 0px;
    width: 100%;
  }
`;

export const accordionHeader = styled.div`
  color: lightblue;
  display: flex;
  justify-content: space-around;
  background-color: gray;
  align-items: center;
  padding: 0.5rem;
  border: solid grey 2px;
  border-radius: 10px;
  font-weight: bold;
`;

export const accordionInfo = styled.div`
  ${(props: {open: boolean}) => props.open
		? 'height: 8rem; overflow: hidden; border-bottom: solid black 2px;'
		: 'height: 0px; overflow: hidden; border-bottom: transparent;'};
  display: flex;  
  flex-grow: 1;
  flex-direction: column;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: height 0.3s ease-in-out;
`;

export const buttonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem;
  width: 50%;
  align-self: flex-end;
  .edit {
    color: white;
    background-color: green;
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-weight: bolder;
  }
  .delete {
    color: white;
    background-color: red;
    border: none;
    border-radius: 8px;
    font-weight: bolder;
  }
`;

export const infoContent = styled.div`
  display: flex;
  th {
    background-color: lightgray;
    border: solid gray 2px;
    border-bottom: none;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  th:nth-child(1) {
    border-top-right-radius: 0px;    
  }
  th:nth-child(2) {
    border-left: none;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }
  th:nth-child(3) {
    border-left: none;
    border-top-left-radius: 0px;
  }
  td {
    border-right: solid gray 2px;
    border-top: none;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    text-align: center;
    border-bottom: solid gray 2px;
    padding: 0.2rem;
  }
  td:nth-child(1) {
    border-left: solid gray 2px;
    border-bottom-left-radius: 8px;
  }
  td:nth-child(3) {
    border-bottom-right-radius: 8px;
  }
`;

export const roleContainer = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
  color: black;
  padding: 5px;
  border-radius: 7px;
  span {
    margin-left: 0.5rem;
  }
`;
