import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import { OPEN_LOCAL_DIRECTORY } from './actions';

const initialState = fromJS({
  selectedDirectory: '',
  openDirectories: []
});

export default handleActions(
  {
    [OPEN_LOCAL_DIRECTORY]: (state, action) => {
      const { directoryPath } = action.payload;
      return state
        .set('selectedDirectory', directoryPath)
        .set('openDirectories', state.get('openDirectories').push(directoryPath));
    }
  },
  initialState
);