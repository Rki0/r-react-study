import useModal from "../hooks/useModal";
import { Modal } from "./Modal";

function Footer() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <footer>
      <span>Welcome to BSD</span>

      <p>Happy new year</p>

      <button onClick={openModal}>
        If you click this button, you will be happy.
      </button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <p>🥰</p>
      </Modal>
    </footer>
  );
}

export default Footer;
