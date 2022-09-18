import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../../../../Theme';
import CommentInput from './Subcomponents/CommentInput';
import CommentsPreview from './Subcomponents/CommentsPreview';
import Overview from './Subcomponents/Overview';

function ReactionsTab({ data: { overview, comments } }) {
  const [showMoreComments, setShowMoreComments] = useState(false);
  const toggleMoreComments = () => {
    setShowMoreComments((old) => !old);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={toggleMoreComments}>
        <Overview data={overview} />
        <CommentsPreview data={comments} />
      </Pressable>
      <CommentInput />
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
