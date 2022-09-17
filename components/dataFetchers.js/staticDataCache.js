/* This is a workaround for static loads in react-native.
When moving the app to use remote DB, this will be removed */
const staticDataCache = {
  chinaTaiwan01: require('../../assets/BetsData/chinaTaiwan01/data.json'),
};

export default staticDataCache;
