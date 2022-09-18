import { StyleSheet, View } from 'react-native';
import theme from '../../../../Theme';
import CommentsPreview from './Subcomponents/CommentsPreview';
import Overview from './Subcomponents/Overview';

function ReactionsTab({ data: { overview, comments } }) {
  return (
    <View style={styles.container}>
      <Overview data={overview} />
      <CommentsPreview data={comments} />
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
