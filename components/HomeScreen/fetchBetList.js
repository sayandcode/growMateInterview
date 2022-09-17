const DATA = [
  {
    ...require('../../assets/BetsData/chinaTaiwan01/basicData.json'),
    img: require('../../assets/BetsData/chinaTaiwan01/BG.png'),
  },
];

async function fetchBetList() {
  // simulates a network request
  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  return DATA;
}

export default fetchBetList;
