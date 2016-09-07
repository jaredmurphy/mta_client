import axios from 'axios';

const IMG_API_URL = "https://source.unsplash.com/category/buildings/1600x1200/?new+york"
const MTA_STATUS_URL = "http://www.mtastat.us/api/trains"

export const FETCH_BG = 'FETCH_BG';
export const FETCH_TRAINS = 'FETCH_TRAINS';
export const FETCH_SINGLE_TRAIN = 'FETCH_SINGLE_TRAIN'

export function fetchBg() {
  const request = axios.get(`${IMG_API_URL}`);
  return {
    type: FETCH_BG,
    payload: request
  };
}

export function fetchTrains() {
  const request = axios.get(`${MTA_STATUS_URL}`);
  return {
    type: 'FETCH_TRAINS',
    payload: request
  };
}

export function fetchSingleTrain(name) {
  const request = axios.get(`${MTA_STATUS_URL}/${name}`);
  return {
    type: FETCH_SINGLE_TRAIN,
    payload: request
  };
}
