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
  ${(props: Props) => props.open && 'margin-left: 17rem;'};
  @media (max-width: 900px) {
    flex-direction: column;
    margin-left: 0;
  }
`;
