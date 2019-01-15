import axios from 'axios';
import api from './config';

/* API Does Not Seem To Support A Query For Date Ranges??? */
/* API By Cam Returns 0 Results On Success So Call Is Not Used In App */

export default {
  getInitialEntities: sol => axios.get(`${api.baseURL}sol=${sol}${api.apiKEY}`),
  getEntititesBySol: sol => axios.get(`${api.baseURL}sol=${sol}${api.apiKEY}`),
  getEntititesByCam: cam =>
    axios.get(`${api.baseURL}camera=${cam}${api.apiKEY}`),
  getEntititesByAll: (sol, cam) =>
    axios.get(`${api.baseURL}sol=${sol}&camera=${cam}${api.apiKEY}`)
};
