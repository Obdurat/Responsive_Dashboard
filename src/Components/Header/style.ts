import styled from 'styled-components';

export const headerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  background-color: black;
  position: fixed;
  width: 100%;
`;

export const buttonsContainer = styled.div`
  display: flex;
  width: 5rem;
  justify-content: space-around;
  height: 100%;
  color: black;
  margin: 0 0.5rem
`;

export const button = styled.div`
  margin: 2% 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  flex-grow: 1;
  border-radius: 50%;
  &:hover {
    background-color: lightgray;
  }
  svg {
    width: 100%;
    height: 100%;
    color: grey
  }
  img {
    height: 100%;
    width: 90%;
    border-radius: 50%;
  }
`;

export const menuButton = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 2rem;
  height: 2rem;
  margin: 0.2rem 0.5rem;
  svg {
    height: 100%;
    width: 100%;
    color: lightgray;
  }
`;
