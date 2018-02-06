import * as types from '../actions/types';

const initialState = {
  bannerArray: [],
  recommendData: [],
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.requestBanner:
      return {
        ...state,
        bannerArray: action.payload,
      };

    default: 
      return state;
  }
}

export default homeReducer;