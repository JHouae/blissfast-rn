import * as types from '../actions/types';

const initialState = {
  bannerArray: [],
  recommendArray: [],
  columnPopArray: [],
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.requestBanner:
      return {
        ...state,
        bannerArray: action.payload,
      };
    case types.requestRecommend:
      return {
        ...state,
        recommendArray: action.payload,
      };
    case types.requestColumnPop:
      return {
        ...state,
        columnPopArray: action.payload,
      };

    default:
      return state;
  }
}

export default homeReducer;