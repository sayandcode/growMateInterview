import { Modal, Pressable, StyleSheet } from 'react-native';
import theme from '../../../../../../Theme';
import ModalContent from './Subcomponents/ModalContent';

function CommentsModal({ visible, onClose: handleClose }) {
  return (
    <Modal
      visible={visible}
      onRequestClose={handleClose}
      animationType="slide"
      transparent
    >
      <Pressable onPress={handleClose} style={styles.overlayBG} />
      <ModalContent onClose={handleClose} style={styles.content} />
    </Modal>
  );
}

export default CommentsModal;

const styles = StyleSheet.create({
  overlayBG: {
    backgroundColor: theme.palette.grey.dark,
    opacity: 0.5,
    flex: 3,
  },
  content: {
    width: '100%',
    flex: 7,
  },
});
