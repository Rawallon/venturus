import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Box,
  FormationColumn,
  FormFieldSet,
  FormGrid,
  FormHeader,
  FormRow,
  SaveButton,
  TagInput,
} from './createTeamStyle';
import FetchPlayer from './FetchPlayer';
import { formationTypes, getFormation } from './formation/formationTypes';
import Pitch from './Pitch';
import { connect } from 'react-redux';
import { getTeam, AddTeam, SetTeam } from '../../actions';

function CreateTeam({ selectedTeam, getTeam, AddTeam, SetTeam, estado }) {
  let { id } = useParams();

  const [sumAge, setSumAge] = useState(0); //Ps: A API utilizada não fornece idade do jogador
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [formationSelected, setformationSelected] = useState([]);
  const [tagInput, setTagInput] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    wsite: '',
    ttype: '',
    desc: '',
  });
  const [formError, setFormError] = useState({});
  const [formationValue, setFormationValue] = useState(
    Object.values(formationTypes)[0],
  );

  useEffect(() => {
    if (id) getTeam(id);
    else clearInputs();
  }, [getTeam, id]);

  useEffect(() => {
    if (id && selectedTeam[0]) {
      setFormData({
        name: selectedTeam[0].teamdata['name'],
        wsite: selectedTeam[0].teamdata['wsite'],
        ttype: selectedTeam[0].teamdata['ttype'],
        desc: selectedTeam[0].teamdata['desc'],
      });
      setTagInput(selectedTeam[0].tag);
      setformationSelected(
        getFormation(formationTypes[selectedTeam[0].formation]),
      );
      setFormationValue(selectedTeam[0].formation);
      setSelectedPlayers(selectedTeam[0].players);
    }
  }, [selectedTeam, id]);
  useEffect(() => {
    setformationSelected(
      getFormation(formationTypes[Object.values(formationTypes)[0]]),
    );
  }, []);

  const FormInput = (e) => {
    const val = e.target.value;
    const fId = e.target.name;
    setFormData({ ...formData, [fId]: val });
  };

  const addPlayer = (player) => {
    setSelectedPlayers([
      ...selectedPlayers,
      { pos: selectedPlayers.length + 1, id: player.id, name: player.name },
    ]);
  };

  const removeTag = (i) => {
    const newTags = [...tagInput];
    newTags.splice(i, 1);

    setTagInput(newTags);
  };

  const tagInputKeyDown = (e) => {
    var val = e.target.value;
    if (e.key === 'Enter' || e.code === 'Comma' || e.code === 'Space') {
      val = val.replace(',', '');
      if (
        tagInput.find((tag) => tag.toLowerCase() === val.toLowerCase()) ||
        !val
      ) {
        e.target.value = '';
        return;
      }
      setTagInput([...tagInput, val]);
      e.target.value = '';
    } else if (e.key === 'Backspace' && !val) {
      removeTag(tagInput.length - 1);
    }
  };

  let history = useHistory();
  const submitData = () => {
    var a = null;
    if (!formData['name']) {
      a = { ...a, name: true };
    } else if (!formData['wsite']) {
      a = { ...a, wsite: true };
    }

    setFormError(a);
    if (!a && selectedPlayers.length === 11) {
      if (!id) {
        AddTeam({
          formation: formationTypes[Object.values(formationTypes)[0]],
          players: selectedPlayers,
          tag: tagInput,
          teamdata: { ...formData, id: Date.now() + '' },
          avgAge: sumAge / 11,
        });
        history.goBack();
      } else {
        SetTeam({
          formation: formationTypes[Object.values(formationTypes)[0]],
          players: selectedPlayers,
          tag: tagInput,
          teamdata: { ...formData, id },
          avgAge: sumAge / 11,
        });
        history.goBack();
      }
      clearInputs();
    }
  };

  const clearInputs = () => {
    setFormData({
      name: '',
      wsite: '',
      ttype: 'real',
      desc: '',
    });
    setTagInput([]);
    setformationSelected(
      getFormation(formationTypes[Object.values(formationTypes)[0]]),
    );
    setSelectedPlayers([]);
  };

  return (
    <Box>
      <header>Create your team</header>
      <hr />
      <FormHeader>Team information</FormHeader>
      <FormGrid>
        <div>
          <FormRow error={formError && formError.name && 'error'}>
            <label htmlFor="name">
              <b>Team name</b>
            </label>
            <input
              type="text"
              placeholder="Insert team name"
              id="name"
              name="name"
              required
              onChange={FormInput}
              value={formData.name}
            />
          </FormRow>
          <FormRow>
            <label htmlFor="desc" style={{ marginTop: '23px' }}>
              <b>Description</b>
            </label>

            <textarea
              id="desc"
              rows="4"
              cols="50"
              name="desc"
              onChange={FormInput}
              value={formData.desc}
            />
          </FormRow>
        </div>
        <div>
          <FormRow error={formError && formError.wsite && 'error'}>
            <label htmlFor="wsite">
              <b>Team website</b>
            </label>
            <input
              type="text"
              placeholder="http://myteam.com"
              id="wsite"
              name="wsite"
              required
              onChange={FormInput}
              value={formData.wsite}
            />
          </FormRow>
          <FormRow>
            <label htmlFor="tag" style={{ marginTop: '23px' }}>
              <b>Tags</b>
            </label>

            <TagInput>
              {tagInput.map((tag, i) => (
                <li key={tag}>
                  {tag}
                  <button
                    type="button"
                    onClick={() => {
                      removeTag(i);
                    }}>
                    +
                  </button>
                </li>
              ))}
              <li>
                <input type="text" onKeyDown={tagInputKeyDown} />
              </li>
            </TagInput>

            <FormRow>
              <label style={{ marginTop: '3.3125rem' }}>
                <b>Team type</b>
              </label>
              <FormFieldSet onChange={FormInput}>
                <div>
                  <input
                    type="radio"
                    id="real"
                    name="ttype"
                    value="real"
                    checked={formData.ttype === 'real'}
                    onChange={FormInput}
                  />
                  <label htmlFor="real">
                    Real
                    <span></span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="fantasy"
                    name="ttype"
                    value="fantasy"
                    checked={formData.ttype === 'fantasy'}
                    onChange={FormInput}
                  />
                  <label htmlFor="fantasy">
                    Fantasy
                    <span></span>
                  </label>
                </div>
              </FormFieldSet>
            </FormRow>
          </FormRow>
        </div>
      </FormGrid>
      <FormHeader>Configure Squad</FormHeader>

      <FormGrid>
        <div>
          <FormRow>
            <FormationColumn>
              <label htmlFor="formationSelect">Formation</label>
              <div style={{ position: 'relative' }}>
                <select
                  id="formationSelect"
                  value={formationValue}
                  onChange={(e) => {
                    setformationSelected(getFormation(e.target.value));
                    setFormationValue(e.target.value);
                  }}>
                  {Object.keys(formationTypes).map((o) => {
                    return (
                      <option key={o} value={formationTypes[o]}>
                        {o}
                      </option>
                    );
                  })}
                </select>
                <span></span>
              </div>
            </FormationColumn>

            <Pitch
              formationSelected={formationSelected}
              selectedPlayers={selectedPlayers}
            />

            <SaveButton type="button" onClick={submitData}>
              Save
            </SaveButton>
          </FormRow>
        </div>
        <div>
          <FormRow>
            <FetchPlayer
              sumAge={sumAge}
              setSumAge={setSumAge}
              addPlayer={addPlayer}
              selectedPlayers={selectedPlayers}
            />
          </FormRow>
        </div>
      </FormGrid>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  estado: state.teams,
  selectedTeam: state.teams.selectedTeam,
});

const mapDispatchToProps = {
  getTeam,
  AddTeam,
  SetTeam,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);
