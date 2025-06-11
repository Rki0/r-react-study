import { Modal } from "./Modal";
import useFetch from "../hooks/useFetch";
import useModal from "../hooks/useModal";

function Main() {
  const { isSuccess, isPending, isError } = useFetch({
    url: "http://localhost:3000/api/main",
    method: "GET",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      id: 1,
      text: "I love you",
    },
  });

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <main>
      <h1>Main</h1>

      <section>
        hello
        <button onClick={openModal}>Donation</button>
      </section>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <p>Hungry</p>
      </Modal>
    </main>
  );
}

export default Main;
