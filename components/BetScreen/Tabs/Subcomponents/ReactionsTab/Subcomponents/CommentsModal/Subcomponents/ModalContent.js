import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Suspense, useContext } from 'react';
import Icon from '../../../../../../../icons/Icon';
import theme from '../../../../../../../Theme';
import Chips from './Chips';
import DisclaimerBanner from './DisclaimerBanner';
import ModalCommentInput from './ModalCommentInput';
import CommentsScroller, {
  CommentsScrollerFallback,
  getAllComments,
} from './CommentsScroller';
import { useResource } from '../../../../../../../../utils/CustomHooks/useResource';
import { BetScreenContext } from '../../../../../../BetScreenContext';

function ModalContent({ style: additionalStyles, onClose: handleClose }) {
  const { betID } = useContext(BetScreenContext);
  const allCommentsResource = useResource(getAllComments.bind(null, betID), []);
  return (
    <View style={{ ...styles.container, ...additionalStyles }}>
      <View style={styles.handle} />
      <View style={styles.heading}>
        <Text style={styles.headingText}>Reactions</Text>
        <Pressable onPress={handleClose}>
          <Icon symbol="closeFilledBlack" />
        </Pressable>
      </View>
      <Chips />
      <DisclaimerBanner />
      <ModalCommentInput />
      <Suspense fallback={<CommentsScrollerFallback />}>
        <CommentsScroller dataResource={allCommentsResource} />
      </Suspense>
    </View>
  );
}

export default ModalContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  handle: {
    backgroundColor: theme.palette.grey.light,
    height: 4,
    width: '50%',
    alignSelf: 'center',
    marginTop: 7,
    marginBottom: 10,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontFamily: 'Lato-Bold',
    fontSize: theme.typography.fontSize.large,
  },
});
