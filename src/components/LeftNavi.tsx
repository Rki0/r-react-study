import { Modal } from "./Modal";
import useModal from "../hooks/useModal";
import useFetch from "../hooks/useFetch";

function LeftNavi() {
  const { isSuccess, isPending, isError } = useFetch({
    url: "http://localhost:3000/api/leftnavi",
    method: "GET",
    keepalive: false,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <nav>
      <header>I am Left Navigation Bar</header>

      <button onClick={openModal}>Open Modal in LeftNavi</button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <h1>Hmm...Left Navi?</h1>

        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </nav>
  );
}

export default LeftNavi;
