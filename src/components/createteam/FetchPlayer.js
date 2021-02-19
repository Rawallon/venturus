import React, { useEffect, useState } from 'react';
import {
  PlayerColumn,
  FormRow,
  PlayerRow,
  PageButton,
} from './createTeamStyle';
import { fakePlayers } from './fakeData';
// const BASE_URL =
//  'https://api.soccersapi.com/v2.2/search?user=XXXXXX&token=XXXXXX';
// const fetchAPI = async (pQuery) => {
//   console.log('fetch ' + pQuery);
//   const ret = await fetch(`${BASE_URL}&t=player&q=${pQuery}`)
//     .then((res) => res.json())
//     .then((js) => console.log(js));
// };

const fakeData = (pQuery) =>
  fakePlayers[0].data.filter((el) => el.name.toLowerCase().includes(pQuery));

export default function FetchPlayer({
  sumAge,
  setSumAge,
  addPlayer,
  selectedPlayers,
}) {
  const [excludedPlayers, setExcludedPlayers] = useState([]);

  const selectPlayer = (player) => {
    if (excludedPlayers.includes(player.id) || excludedPlayers.length >= 11)
      return;
    addPlayer(player);
    setSumAge(player.id + sumAge); //Ps: Replace for age
    setExcludedPlayers([...excludedPlayers, player.id]);
  };
  const [players, setPlayers] = useState([]);
  const [listingIndex, setListingIndex] = useState(1);

  // To make it similar to the provided image
  useEffect(() => {
    setPlayers(fakeData('ronal'.toLowerCase()));
  }, []);
  useEffect(() => {
    if (selectedPlayers) setExcludedPlayers(selectedPlayers.map((el) => el.id));
  }, [selectedPlayers]);

  const playerSearchKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      //fetchAPI(val); // Might want to use the actual API
      setPlayers(fakeData(val.toLowerCase()));
      return;
    }
  };

  const arrPaginated = players.slice(listingIndex * 10 - 10, listingIndex * 10);
  return (
    <FormRow>
      <label htmlFor="playerSq">
        <b>Search Player</b>
      </label>
      <input
        id="playerSq"
        type="text"
        onKeyDown={(e) => playerSearchKeyDown(e)}
        style={{ marginBottom: '12px' }}
      />

      {arrPaginated.map((player) => (
        <PlayerColumn
          key={player.id}
          onClick={() => selectPlayer(player)}
          disabled={excludedPlayers.includes(player.id)}>
          <div>
            <PlayerRow>
              <div>
                Name: <span>{player.name}</span>
              </div>
              <div>
                Age: <span>{player.id}</span>
              </div>
            </PlayerRow>
          </div>
          <div>
            Nacionality: <span>{player.country_name}</span>
          </div>
        </PlayerColumn>
      ))}
      <PlayerRow style={{ marginTop: '2rem' }}>
        <PageButton
          onClick={() => setListingIndex(listingIndex - 1)}
          disabled={!(listingIndex > 1)}>
          Previous page
        </PageButton>
        {arrPaginated.length >= 10 ? (
          <PageButton onClick={() => setListingIndex(listingIndex + 1)}>
            Next page
          </PageButton>
        ) : (
          ''
        )}
      </PlayerRow>
    </FormRow>
  );
}
