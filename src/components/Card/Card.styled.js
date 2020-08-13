import styled from 'styled-components';

const StyledCard = styled.div`
  width: 45ch;
  height: 45ch;
  background: grey;
  border-radius: 5px;
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 5px solid white;
  z-index: 1;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    z-index: 10;
  }
`;

export default StyledCard;
