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
