import fetchBetImg from '../dataFetchers.js/fetchBetImg';

async function fetchBetList() {
  // simulates a network request
  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  const allBetsData = require('../../assets/BetsData/allBets.json');
  const allBetsWithPics = await Promise.all(allBetsData.map(betToBetWithImg));
  return allBetsWithPics;
}

async function betToBetWithImg(betData) {
  const img = await fetchBetImg(betData.betID);
  return { ...betData, img };
}

export default fetchBetList;
