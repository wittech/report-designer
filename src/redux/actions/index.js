import { INITIALIZE_APP, ADD_TO_SCENE, MAKE_ELEMENT_ACTIVE } from './types';
import axios from 'axios';

export const initializeApp = settings => {
  return {
    type: INITIALIZE_APP,
    payload: settings
  };
};

export const loadSettings = () => {
  return async dispatch => {
    try {
      const res = await axios.get('./settings.json');
      dispatch(initializeApp(res.data));
    } catch (e) {}
  };
};

export const addToScene = object => {
  return {
    type: ADD_TO_SCENE,
    payload: object
  };
};

export const makeElementActive = elementId => {
  return {
    type: MAKE_ELEMENT_ACTIVE,
    payload: elementId
  };
};
