import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ADDING_SMURFS = 'ADDING_SMURFS';
export const ADDED_SMURFS = 'ADDED_SMURFS';
export const DELETING_SMURFS = 'DELETING_SMURFS';
export const DELETED_SMURFS = 'DELETED_SMURFS';
export const ERROR = 'ERROR';

export const getSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
      .then(response => {
        dispatch({ type: FETCHED_SMURFS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const addSmurf = smurf => {
  const newSmurf = axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURFS });
    newSmurf
      .then(response => {
        dispatch({ type: ADDED_SMURFS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const deleteSmurf = (id,index) => {
  const deleteSmurf = axios.delete(`http://localhost:3333/smurfs/${id}`, id);
  return dispatch => {
    dispatch({ type: DELETING_SMURFS });
    deleteSmurf
      .then(response => {
        dispatch({ type: DELETED_SMURFS, payload: index });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};
