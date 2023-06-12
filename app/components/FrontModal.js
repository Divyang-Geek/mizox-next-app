// Components
import { Modal } from "react-bootstrap";

const FrontModal = ({ children, show, size, closeModal, className, centered, animation }) => {
    return (
        <>
            <Modal show={show} onHide={closeModal} className={className} size={size} centered={centered} animation={animation}>
                <button type="button" className="close_btn" onClick={closeModal}>
                    <span aria-hidden="true">×</span>
                </button>
                <Modal.Body className="overflow_text">{children}</Modal.Body>
            </Modal>
        </>
    );
};

export default FrontModal;