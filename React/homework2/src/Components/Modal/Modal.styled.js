import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0 ;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  background-color: rgba(91, 91, 91, 0.57);
`
export const ModalBody = styled.div`
  max-width: 600px;
  height: fit-content;
  border-radius: 10px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  background-color: rgba(126, 126, 126, 0.58);
  backdrop-filter: blur(15px);
  box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.55);
`
export const ModalHeader = styled.h1`
  width: 100%;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  font-size: 22px;
  color: #000000;
  position: relative;
  background-color: rgb(255, 255, 255);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: 10px;
  }

  svg {
    cursor: pointer;
  }
`
export const ModalContent = styled.p`
  margin: 25px 30px 25px 30px;
  padding: 0 20px 0 20px;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  line-height: 26px;
`
export const ModalBtnWrapper = styled.div`
  margin: auto;
  
  button {
    margin-left: 8px;
    margin-right: 8px;
  }
  
  button:hover {
    box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.55);
  }
`