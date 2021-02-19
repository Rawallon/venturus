import styled from 'styled-components';
import { Container } from '../../MainStyle';

export const HeaderBG = styled.header`
  background: rgb(192, 14, 79);
  background: linear-gradient(
    90deg,
    rgba(192, 14, 79, 1) 0%,
    rgba(139, 32, 111, 1) 100%
  );
  color: #fff;
  height: 3.125rem;
  margin: 0;
  padding: 0.3125rem;
  box-sizing: border-box;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);
  margin-bottom: 2.5rem;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  font-weight: normal;
  font-size: ${(props) => (props.username ? '14px' : '18px')};
  line-height: 21px;

  svg {
    margin-right: 1rem;
    width: auto;
    height: 2.5rem;
  }
`;

export const HeaderUserImg = styled.div`
  border-radius: 50%;
  display: flex;
  justify-items: center;
  padding: 8px;
  background: #efefef;
  color: #2f2f2f;
  font-weight: 700;
  //height: 2.5rem;
  margin-left: 7px;
`;
