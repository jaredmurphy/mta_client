import axios from 'axios';

const IMG_API_URL = "https://source.unsplash.com/category/buildings/1600x1200/?new+york"

export const FETCH_BG = 'FETCH_BG';

export function fetchBg() {
  const request = axios.get(`${IMG_API_URL}`);
  return {
    type: FETCH_BG,
    payload: request
  };
}
