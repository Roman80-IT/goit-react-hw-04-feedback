import { styled } from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Btn = styled.button`
  height: 30px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 4px;

  text-transform: capitalize;

  &:hover,
  &:focus {
    border-color: ${props => getColor(props.name)};
  }
`;

function getColor(name) {
  switch (name) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'orange';
    case 'bad':
      return 'red';
    default:
      return 'black';
  }
}
