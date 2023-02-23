import styled from 'styled-components';

export const boardContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-grow: 1;
  width: 100vw;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
