import { FETCH_THREADS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_THREADS:
      return action.payload;
    default:
      return state;
  }
};
