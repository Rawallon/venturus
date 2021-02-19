import styled from 'styled-components';

export const PlayerDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: 16%;
  height: 10%;
  border-radius: 50%;
  background-image: url(${(props) => props.background});
  /* background-position: 50% 0%; */

  & > img {
    border-radius: 50%;
    width: auto;
    height: auto;
  }
  span {
    position: absolute;
    top: 100%;
    left: 35%;
    padding: 0 7px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 1024px) {
    width: 10%;
  }
`;
