import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 93%;
  max-width: 1288px;
  margin: 0 auto;
  /* padding: 0 20px; */
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 400px) {
    width: 100%;
    padding: 0;
  }
`;

export const BoxCard = styled.div`
  box-sizing: border-box;
  padding: 0.375rem 2rem;
  background: #fff;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;
