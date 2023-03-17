import styled, {keyframes} from 'styled-components';

export const dropdownList = styled.ul`
  list-style-type: none;
  padding: 0.5rem;
  margin: 0.5rem 0.4rem;
  position: fixed;
  top: 3rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-right: solid 2px grey;
  border-bottom: solid 2px grey;
  border-top: solid 2px grey;
  border-radius: 8px;
  background-color: white;
  z-index: 1;
  width: 300px;
  height: 85%;
  z-index: 2;
  div {
    font-weight: bold;
  }
  svg {
    height: 2rem;
    width: 2rem;
  }
  li {
    display: flex;
    flex-grow: 1;
    align-items: center;
    margin: 0.5rem;
    text-indent: 20px;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.09);
      color: lightblue
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: -0.7rem;
    left: 0.4rem;
    width: 20px;
    height: 20px;
    background-color: white;
    transform: rotate(45deg);
    border-top: solid grey 2px;
    border-left: solid grey 2px;
  }
`;
