import React from 'react';
import placeholderProfile from '../../../images/profile.svg';
import placeholderPlayer from '../../../images/player.svg';
import { PlayerDiv } from './playerStyle';

function Formation({ formation = [], selectedPlayers = [] }) {
  if (
    (!formation && !selectedPlayers) ||
    (formation === [] && selectedPlayers === [])
  )
    return null;
  return (
    <div
      style={{
        overflow: 'hidden',
        height: '673px',
        left: '0',
        top: '0',
        width: '100%',
      }}>
      {formation.map((line, formIdx) => {
        return (
          <div className="Formation-line" key={formIdx}>
            {line.map((player, lineIdx) => {
              const sPlayer = selectedPlayers.find(
                (el) => el.pos === player.number,
              );

              if (!sPlayer)
                return (
                  <PlayerDiv
                    id={player.number}
                    top={player.top}
                    left={player.left}
                    key={formIdx + lineIdx}>
                    <img
                      id={formIdx + lineIdx}
                      src={placeholderPlayer}
                      alt=""
                    />
                  </PlayerDiv>
                );

              return (
                <PlayerDiv
                  draggable="true"
                  top={player.top}
                  left={player.left}
                  id={formIdx + lineIdx}
                  key={formIdx + lineIdx}>
                  <img
                    id={sPlayer.id}
                    src={`https://cdn.soccersapi.com/images/soccer/players/80/${sPlayer.id}.png`}
                    alt=""
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = placeholderProfile;
                    }}
                  />
                  <span>
                    {sPlayer.name
                      .split(' ')
                      .map((name, i) => (i < 2 ? name.charAt(0) : ''))
                      .join('')}
                  </span>
                </PlayerDiv>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Formation;
