import { createActions } from 'redux-actions';

export const OPEN_LOCAL_DIRECTORY = 'OPEN_LOCAL_DIRECTORY';

export const {
  openLocalDirectory
} = createActions(
  OPEN_LOCAL_DIRECTORY
);