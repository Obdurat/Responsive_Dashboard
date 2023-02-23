import styled from 'styled-components';

type Props = {
	open: boolean;
};

export const boardContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-grow: 1;
  flex-wrap: wrap;
  transition: margin-left 0.3s ease-in-out;
  ${(props: Props) => props.open && 'margin-left: 20rem;'};
  @media (max-width: 700px) {
    border: solid green 2px;
    flex-direction: column;
    width: 99%;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }
  @media (min-height: 900px) and (min-width: 900px) {
    height: 90%;
  }
`;
