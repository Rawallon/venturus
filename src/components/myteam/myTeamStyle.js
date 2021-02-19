import styled from 'styled-components';

export const MyTeamFlex = styled.div`
  display: flex;
  gap: 0 23px;

  div {
    /* &:first-of-type {
      margin-right: 23px;
    } */
    width: 50%;
  }
`;
export const MyTeamsTable = styled.table`
  width: 100%;
  margin-top: 34px;
  font-size: 14px;

  tr {
    display: flex;
  }
  thead > tr {
    margin-bottom: 21px;
  }
  tr > th {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 0 14px 0 22px;
    width: 32%;

    &:nth-child(1) {
      cursor: pointer;
      border-right: 1px solid gray;
    }
    &:nth-child(2) {
      cursor: pointer;
      padding-right: 0;
      padding: 0 7px 0 18px;
      width: 100%;
    }
  }
`;

export const MyTeamsTableRow = styled.tr`
  display: flex;
  align-items: center;
  border-radius: 0;
  padding: 13px 0px 16px 22px;
  background: #fff;
  color: #000;
  border-bottom: 1px solid gray;
  img {
    cursor: pointer;
  }
  &:hover {
    background: #f7eef7;
    color: #b13e7d;
    border-radius: 6px;
    border-bottom: 1px solid transparent;

    & > td {
      div {
        display: block;
      }
    }
  }

  img {
    max-width: 13%;
    height: auto;
    margin: 0 5px;
  }

  & > td {
    text-align: left;
    /* padding: 0 14px 0 22px; */
    width: 32%;

    &:nth-child(2) {
      padding-right: 0;
      padding: 0 7px 0 13px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & > div {
      display: none;
      text-align: right;
      margin-left: auto;
    }
  }
`;

export const PickedPlayerFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 22px;
    color: #fff;
    margin-top: 32px;
    margin-bottom: 2px;
  }
`;
export const PercentageDiv = styled.div`
  position: relative;
  color: #fff;
  font-size: 18px;
  font-weight: 700;

  div {
    width: 100px;
  }
  div > img {
    z-index: 1;
    border-radius: 50%;
    top: 24px;
    left: -10px;
    transform: none;
    width: 80%;
    min-width: 85px;
    height: auto;
    border: 2px solid #8d0876;
  }

  svg {
    transform: translateX(-15%);
    min-width: 116px;
    width: 110%;
    height: 110%;
  }

  p {
    position: absolute;
    right: -0%;
    top: 6%;

    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 18px;
    font-weight: 700;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 155%;
      height: 1px;
      background: #fff;
    }
  }
`;
export const MyTeamGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 19px 46px;
  width: 100%;
  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;
export const BoxCard = styled.div`
  padding: ${(props) => (props.fullRow ? `23px 8px;` : `23px;`)};
  background: #fff;
  border-radius: 15px;
  width: 100%;
  ${(props) =>
    props.fullRow ? `grid-row-start: span 4;` : `grid-row-start: span 2;`};

  header {
    color: #552c8a;
    padding-left: 9px;
    font-size: 1.375rem;
    font-weight: 700;
    margin: 0 0 1.5rem;
    display: flex;
    justify-content: space-between;
  }

  hr {
    margin: ${(props) => (props.fullRow ? `0 -8px;` : `0 -23px;`)};
    border: 0;
    height: 1px;
    background: #eeeeee;
  }

  @media (max-width: 1024px) {
    grid-row-start: span 2;
  }
`;

export const BoxPickedCard = styled(BoxCard)`
  position: relative;
  padding: 0;
  background: linear-gradient(0deg, #82307f 0%, #b03b7c 100%);
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    top: -50%;
    width: 100%;
    height: 200%;
    transform: rotate(90deg);
    /* transform-origin: 50% 50%; */
  }
`;

export const AddButton = styled.button`
  border: 1px solid #8a002c;
  border-radius: 10px;
  padding: 0 10px;
  //font-size: 30px;
  height: 100%;
  color: white;
  background: rgb(192, 14, 79);
  background: linear-gradient(180deg, #b03b7c 0%, #82307f 100%);
  box-shadow: 0 12px 10px 0 rgb(0 0 0 / 20%);
`;

export const AvgAgeTable = styled.table`
  margin: 0;
  padding: 0;
  width: 100%;
  background: #f7f3f7;
  border-radius: 10px;
  border-spacing: 3px;
  tr > td:hover,
  tr > td.active {
    border: 1px solid #c50341;
  }
  tr > td {
    border: 1px solid transparent;
    background: #fff;
    border-radius: 5px;
    padding: 9px 18px;
    font-size: 13px;
    letter-spacing: -0.035em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const AvgAgeTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding: 20px 0 10px 0;
`;
