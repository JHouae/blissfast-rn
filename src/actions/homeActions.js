import * as types from './types';
import { get } from '../network/network';
import * as api from '../network/api';
import Toast from 'react-native-root-toast';

export function requestBanner() {
  return (dispatch) => {
    get(api.homePageInfo, {"module": "slide"})
    .then((result) => {      
      dispatch({
        type: types.requestBanner, 
        payload: result.body.slideArr,
      });
    }).catch((err) => {

    })
  }
}

export function requestRecommend() {
  return (dispatch) => {
    get(api.homePageInfo, {"module": "recommend"})
    .then((result) => {      
      dispatch({
        type: types.requestRecommend, 
        payload: result.body.recommendArr,
      });
    }).catch((err) => {

    })
  }
}

export function requestColumnPop() {
  return (dispatch) => {
    get(api.homePageInfo, {"module": "columnPop"})
    .then((result) => {      
      dispatch({
        type: types.requestColumnPop, 
        payload: result.body.columnPopArr,
      });
    }).catch((err) => {

    })
  }
}