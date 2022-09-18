import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../../Theme';
import Bubble from './Subcomponents/Bubble';
import Graphs from './Subcomponents/Graphs';

function NewsTab({ data: { stats, featured } }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{stats.count} Expert Opinion</Text>
      <Stats data={stats} />
    </View>
  );
}

function Stats({ data }) {
  return (
    <View style={styles.statsContainer}>
      <Bubble>{data.predictionPercentage.yes * 100}%</Bubble>
      <Graphs data={data.predictionPercentage} />
    </View>
  );
}

export default NewsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: theme.palette.grey.dark,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginHorizontal: '5%',
    marginVertical: '2.5%',
  },
  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
});
