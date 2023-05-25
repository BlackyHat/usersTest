import Button from 'react-bootstrap/Button';
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
