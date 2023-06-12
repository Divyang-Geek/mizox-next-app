// Components
import FrontModal from "../../FrontModal";

const DemoModal2 = ({ show, setShow }) => {
    const handleClose = () => setShow(false);

    return (
        <>
            <FrontModal show={show} closeModal={handleClose} size="lg" centered animation={false}>
                Hello
                <button onClick={handleClose}>CLose</button>
            </FrontModal>
        </>
    );
};

export default DemoModal2;
