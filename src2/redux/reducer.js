import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import { ADD } from './actions';

const initialState = fromJS({
  counter: 0
});

export default handleActions(
  {
    [ADD]: (state, action) => state.set('counter', action.payload.counter + 1)
  },
  initialState
);