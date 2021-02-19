export const AddTeam = (team) => {
  return {
    type: 'ADD_TEAM',
    payload: team,
  };
};
export const SetTeam = (team) => {
  return {
    type: 'SET_TEAM',
    payload: team,
  };
};
export const getTeams = () => {
  return {
    type: 'GET_TEAMS',
  };
};
export const getTeam = (tID) => {
  return {
    type: 'GET_TEAM',
    payload: tID,
  };
};
export const delTeam = (tID) => {
  return {
    type: 'DELETE_TEAM',
    payload: tID,
  };
};
