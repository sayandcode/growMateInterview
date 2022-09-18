import { StyleSheet, Text, View } from 'react-native';
import { Suspense } from 'react';
import { useResource } from '../../../../../../utils/CustomHooks/useResource';
import AuthorDP, { AuthorDPFallback, getAuthorDP } from './AuthorDP';

function Comment({ data: { dpColor, authorID, author, content } }) {
  const authorDPResource = useResource(getAuthorDP.bind(null, authorID), []);

  return (
    <View style={styles.commentContainer}>
      <Suspense fallback={<AuthorDPFallback />}>
        <AuthorDP color={dpColor} authorDPResource={authorDPResource} />
      </Suspense>
      <Text numberOfLines={2} style={styles.textContainer}>
        <Text style={styles.author}>{author}</Text>{' '}
        <Text style={styles.content}>{content}</Text>
      </Text>
    </View>
  );
}
export default Comment;

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    marginBottom: '2.5%',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  author: {
    fontFamily: 'Lato-Bold',
    fontSize: 13,
  },
  content: { fontFamily: 'Lato-Regular', fontSize: 13 },
});
