import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  AddButton,
  AvgAgeTable,
  AvgAgeTitle,
  BoxCard,
  BoxPickedCard,
  MyTeamFlex,
  MyTeamGrid,
  MyTeamsTable,
  MyTeamsTableRow,
  PercentageDiv,
  PickedPlayerFlex,
} from './myTeamStyle';
import pitchImg from '../../images/pitchfield.svg';
import trashIcon from '../../images/edit/trash.svg';
import shareIcon from '../../images/edit/share.svg';
import penIcon from '../../images/edit/pen.svg';
import placeholderProfile from '../../images/profile.svg';
import { connect } from 'react-redux';
import { getTeams, delTeam } from '../../actions';

function pickedPlayers(players) {
  if (players.length === 0) return [1, 0, 1, 0];

  let pCont = {};

  // Creates an array counting how many times an id repeats
  players.forEach(function (item) {
    Object.values(item).map((el) => {
      if (pCont[el.id]) pCont[el.id]++;
      else pCont[el.id] = 1;
      return el;
    });
  });

  //Get entries for highest and lowest
  let highest = ['', 1];
  let lowest = ['', 1];
  Object.entries(pCont).forEach(function (item, i) {
    if (item[1] >= highest[1]) highest = [item];
    else if (item[1] <= lowest[1]) lowest = [item];
  });
  return [
    highest[0][0],
    Math.floor((highest[0][1] / Object.entries(pCont).length) * 100),
    lowest[0][0],
    Math.floor((lowest[0][1] / Object.entries(pCont).length) * 100),
  ];
}

function MyTeam({ getTeams, delTeam, myTeamsArr, avgAge, players }) {
  const [orderBy, setOrderBy] = useState('name');
  const [orderNum, setOrderNum] = useState(0);
  const [sortedData, setSortedData] = useState([]);
  const [highAvgAge, setHighAvgAge] = useState([]);
  const [lowAvgAge, setLowAvgAge] = useState([]);
  const [pickedPlayerStats, setPickedPlayerStats] = useState([]);

  const orderList = (order, orderN = orderNum) => {
    setOrderBy(order);
    if (orderBy === 'name') sortName(orderN);
    else sortDesc(orderN);
    sortAvgAge();
  };
  const sortName = (order) => {
    switch (order) {
      default:
      case 0:
        setSortedData(
          Object.values(myTeamsArr).sort((a, b) =>
            a.name.localeCompare(b.name),
          ),
        );
        setOrderNum(order + 1);
        break;
      case 1:
        setSortedData(
          Object.values(myTeamsArr).sort((a, b) =>
            b.name.localeCompare(a.name),
          ),
        );
        setOrderNum(order - 1);
        break;
    }
  };
  const sortDesc = (order) => {
    switch (order) {
      default:
      case 0:
        setSortedData(
          Object.values(myTeamsArr).sort((a, b) =>
            a.desc.localeCompare(b.desc),
          ),
        );
        setOrderNum(1);
        break;
      case 1:
        setSortedData(
          Object.values(myTeamsArr).sort((a, b) =>
            b.desc.localeCompare(a.desc),
          ),
        );
        setOrderNum(0);
        break;
    }
  };
  const sortAvgAge = () => {
    setHighAvgAge(Object.values(avgAge).sort((a, b) => b.avgAge - a.avgAge));
    setLowAvgAge(Object.values(avgAge).sort((a, b) => a.avgAge - b.avgAge));
  };

  useEffect(() => {
    setPickedPlayerStats(pickedPlayers(players));
    getTeams();
    orderList(orderBy, 1);
  }, [myTeamsArr, getTeams, orderBy, players]);
  return (
    <MyTeamGrid>
      <BoxCard fullRow>
        <header>
          <span>My teams</span>
          <Link to="/create">
            <AddButton>+</AddButton>
          </Link>
        </header>
        <hr />
        <MyTeamsTable>
          <thead>
            <tr>
              <th onClick={() => orderList('name')}>
                Name{' '}
                <svg
                  width="6"
                  height="9"
                  viewBox="0 0 6 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L3 0L0 3H6Z" fill="#AAABAC" />
                  <path
                    d="M-2.62268e-07 6L3 9L6 6L-2.62268e-07 6Z"
                    fill="#AAABAC"
                  />
                </svg>
              </th>
              <th onClick={() => orderList('desc')}>
                Description
                <svg
                  width="6"
                  height="9"
                  viewBox="0 0 6 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L3 0L0 3H6Z" fill="#AAABAC" />
                  <path
                    d="M-2.62268e-07 6L3 9L6 6L-2.62268e-07 6Z"
                    fill="#AAABAC"
                  />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((el) => (
              <MyTeamsTableRow key={el.name}>
                <td>{el.name}</td>
                <td>
                  {el.desc}
                  <div>
                    <img
                      src={trashIcon}
                      alt=""
                      onClick={() => delTeam(el.id)}
                    />
                    <img src={shareIcon} alt="" />
                    <Link to={`/edit/${el.id}`}>
                      <img src={penIcon} alt="" />
                    </Link>
                  </div>
                </td>
              </MyTeamsTableRow>
            ))}
          </tbody>
        </MyTeamsTable>
      </BoxCard>
      <BoxCard>
        <header>
          <span>Top 5</span>
        </header>
        <hr />
        <MyTeamFlex>
          <div>
            <AvgAgeTitle>Highest avg age</AvgAgeTitle>
            <AvgAgeTable>
              <tbody>
                {highAvgAge.map((el, i) => {
                  if (i <= 4)
                    return (
                      <tr key={el.teamdata.name + el.avgAge}>
                        <td className={i === 0 ? 'active' : ''}>
                          <span>{el.teamdata.name}</span>
                          <span>{el.avgAge}</span>
                        </td>
                      </tr>
                    );
                  return null;
                })}
              </tbody>
            </AvgAgeTable>
          </div>
          <div>
            <AvgAgeTitle>Lowest avg age</AvgAgeTitle>
            <AvgAgeTable>
              <tbody>
                {lowAvgAge.map((el, i) => {
                  if (i <= 4)
                    return (
                      <tr key={el.teamdata.name + el.avgAge}>
                        <td className={i === 0 ? 'active' : ''}>
                          <span>{el.teamdata.name}</span>
                          <span>{el.avgAge}</span>
                        </td>
                      </tr>
                    );
                  return null;
                })}
              </tbody>
            </AvgAgeTable>
          </div>
        </MyTeamFlex>
      </BoxCard>
      <BoxPickedCard>
        <MyTeamFlex>
          <PickedPlayerFlex>
            <p>Most picked player</p>
            <PercentageDiv>
              <p>{pickedPlayerStats[1]}%</p>
              <div>
                <img
                  src={`https://cdn.soccersapi.com/images/soccer/players/80/${pickedPlayerStats[0]}.png`}
                  alt=""
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderProfile;
                  }}
                />
              </div>
              <svg
                width="110%"
                height="110%"
                viewBox="0 0 91 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40 78C19.0469 78 2 60.9542 2 40.0007C2 19.0472 19.0469 2 40 2C60.9531 2 78 19.0472 78 40.0007C78 60.9542 60.9531 78 40 78Z"
                  stroke="#A473C3"
                  strokeWidth="2"
                  strokeMiterlimit="3.8637"
                  strokeDasharray="6 6"
                />
                <path
                  d="M40 72C22.3553 72 8 57.6456 8 40.0006C8 22.3556 22.3553 8 40 8C57.6447 8 72 22.3556 72 40.0006C72 57.6456 57.6447 72 40 72Z"
                  fill="#CC9ABF"
                  stroke="#7B2C66"
                  strokeWidth="2"
                  strokeMiterlimit="3.8637"
                />
              </svg>
            </PercentageDiv>
          </PickedPlayerFlex>
          <PickedPlayerFlex>
            <p>Least picked player</p>
            <PercentageDiv>
              <p>{pickedPlayerStats[3]}%</p>
              <div>
                <img
                  src={`https://cdn.soccersapi.com/images/soccer/players/80/${pickedPlayerStats[2]}.png`}
                  alt=""
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderProfile;
                  }}
                />
              </div>
              <svg
                width="110%"
                height="110%"
                viewBox="0 0 91 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40 78C19.0469 78 2 60.9542 2 40.0007C2 19.0472 19.0469 2 40 2C60.9531 2 78 19.0472 78 40.0007C78 60.9542 60.9531 78 40 78Z"
                  stroke="#A473C3"
                  strokeWidth="2"
                  strokeMiterlimit="3.8637"
                  strokeDasharray="6 6"
                />
                <path
                  d="M40 72C22.3553 72 8 57.6456 8 40.0006C8 22.3556 22.3553 8 40 8C57.6447 8 72 22.3556 72 40.0006C72 57.6456 57.6447 72 40 72Z"
                  fill="#CC9ABF"
                  stroke="#7B2C66"
                  strokeWidth="2"
                  strokeMiterlimit="3.8637"
                />
              </svg>
            </PercentageDiv>
          </PickedPlayerFlex>
        </MyTeamFlex>
        <img src={pitchImg} alt="" />
      </BoxPickedCard>
    </MyTeamGrid>
  );
}

MyTeam.propTypes = {
  getTeams: PropTypes.func.isRequired,
  delTeam: PropTypes.func.isRequired,
  myTeamsArr: PropTypes.array.isRequired,
  avgAge: PropTypes.array.isRequired,
  players: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  myTeamsArr: state.teams.myTeams.map((el) => el.teamdata),
  avgAge: state.teams.myTeams.map((el) => {
    return { avgAge: el.avgAge, teamdata: el.teamdata };
  }),
  players: state.teams.myTeams.map((el) => el.players),
});

const mapDispatchToProps = {
  delTeam,
  getTeams,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTeam);
