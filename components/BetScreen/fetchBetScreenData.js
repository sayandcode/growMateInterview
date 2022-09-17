import fetchBetData from '../dataFetchers.js/fetchBetData';
import fetchBetImg from '../dataFetchers.js/fetchBetImg';

async function fetchBetScreenData(betID) {
  const betDataRequest = fetchBetData(betID);
  const imgRequest = fetchBetImg(betID);
  const [betData, img] = await Promise.all([betDataRequest, imgRequest]);
  return { ...betData, img };
}

export default fetchBetScreenData;
