import * as types from './types';
import { get } from '../network/network';
import * as api from '../network/api';
import Toast from 'react-native-root-toast';

export const requestBanner = () => async (dispatch) => {
  try {
    const result = await get(api.homePageInfo, {"module": "slide"});
    dispatch({
      type: types.requestBanner, 
      payload: result.body.slideArr,
    });
  } catch(err) {

  }
}

export const requestRecommend = () => async (dispatch) => {
  try {
    const result = await get(api.homePageInfo, {"module": "recommend"});
    dispatch({
      type: types.requestRecommend, 
      payload: result.body.recommendArr,
    });
  } catch(err) {

  }
}

export const requestColumnPop = () => async (dispatch) => {
  try {
    const result = await get(api.homePageInfo, {"module": "columnPop"});
    dispatch({
      type: types.requestColumnPop, 
      payload: result.body.columnPopArr,
    });
  } catch(err) {

  }
}

