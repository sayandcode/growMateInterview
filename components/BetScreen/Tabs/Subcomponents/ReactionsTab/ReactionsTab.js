import { StyleSheet, View } from 'react-native';
import theme from '../../../../Theme';
import Overview from './Subcomponents/Overview';

function ReactionsTab({ data: { overview, comments } }) {
  return (
    <View style={styles.container}>
      <Overview data={overview} />
    </View>
  );
}

export default ReactionsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.white.main,
  },
});
