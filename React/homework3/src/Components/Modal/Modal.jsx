import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import {ModalWrapper, ModalBody, ModalHeader, ModalContent, ModalBtnWrapper} from "./Modal.styled.jsx";
export default function Modal(props) {
        return (
            <ModalWrapper onClick={() => props.onCansel()}>
                <ModalBody onClick={(e) => e.stopPropagation()}>
                    <ModalHeader>
                        <p>Do you want to add to cart?</p>
                        <svg onClick={() => props.onCansel()}
                             viewBox="0 0 24 24"
                             width="34" height="34"
                             fill="black"
                             stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </ModalHeader>
                    <ModalContent>If you add this item to your cart, you can check out later! Are you sure you want to add?</ModalContent>
                    <ModalBtnWrapper>
                        <Button text='Ok' onClick={() => props.onOk()}/>
                        <Button text='Cansel' onClick={() => props.onCansel()}/>
                    </ModalBtnWrapper>
                </ModalBody>
            </ModalWrapper>
        );
}

Modal.propTypes = {
    onCansel: PropTypes.func,
    onOk: PropTypes.func,
}