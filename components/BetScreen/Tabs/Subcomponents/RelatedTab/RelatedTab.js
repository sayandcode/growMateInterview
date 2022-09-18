import { StyleSheet, View } from 'react-native';
import RelatedItem from './Subcomponents/RelatedItem';

function RelatedTab({ data }) {
  return (
    <View style={styles.container}>
      {data.map((item, index, array) => (
        <RelatedItem
          key={item.articleId}
          data={item}
          style={{
            // no margin for last one
            marginBottom: index === array.length - 1 ? 0 : '5%',
          }}
        />
      ))}
    </View>
  );
}

export default RelatedTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
});
