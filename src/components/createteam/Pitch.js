import React from 'react';
import pitchImg from '../../images/pitchfield.svg';
import { PitchDiv } from './createTeamStyle';
import PlayerFormation from './formation/PlayerFormation';

export default function Pitch({ formationSelected, selectedPlayers }) {
  return (
    <PitchDiv>
      <img draggable="false" src={pitchImg} alt="" />
      <PlayerFormation
        formation={formationSelected}
        selectedPlayers={selectedPlayers}
      />
    </PitchDiv>
  );
}
