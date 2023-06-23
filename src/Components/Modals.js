import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import '../App.css';

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    return(
        <div>
            <button class="btCat" onClick={openModal1}>Catalogo</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <div class="e26_2">
                    <div  class="e17_18"></div>
                    <div  class="e17_16"></div>
                    <div  class="e17_14"></div>
                    <div  class="e17_12"></div>
                    <div  class="e17_10"></div>
                    <div  class="e17_8"></div>
                    <div  class="e17_6"></div>
                </div>
            </Modal>
        </div>
    )
}
export default Modals