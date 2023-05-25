import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

function PureModal({ title, show, handleClose, children }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        {title && <Modal.Title>{title}</Modal.Title>}
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

export default PureModal;

PureModal.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
