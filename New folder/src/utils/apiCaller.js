import axios from 'axios';
import * as Config from '../constants/Config';

export function callAPI(endPoint, method = 'GET', body) {
  return axios({
    method,
    url: `${Config.urlAPI}/${endPoint}`,
    data: body
  }).catch(err => {
    return err;
  });
}