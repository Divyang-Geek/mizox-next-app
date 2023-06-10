import FrontModal from "../../FrontModal";

const DemoModal = ({ show, setShow }) => {
    const handleClose = () => setShow(false);

    return (
        <>
            <FrontModal show={show} closeModal={handleClose} size="lg">
                <h3 className="h3-title modal_title">Create Referral Link</h3>
            </FrontModal>
        </>
    );
};

export default DemoModal;
