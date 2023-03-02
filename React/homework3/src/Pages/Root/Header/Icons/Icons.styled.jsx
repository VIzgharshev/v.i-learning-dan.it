import styled from "styled-components";

export const IconsWrapper = styled.div`
  width: fit-content;
  margin: auto;
  display: flex;
  gap: 10px;
  position: fixed;
  transform-origin: center;
  z-index: 10;
  top: -13px;
  right: calc(50% - 700px);
`
export const Favorite = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 0 0 50px 50px ;
  padding-top: 5px;
  border: 1px solid;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;

  svg {
    position: relative;
    left: 5px;
    top: 5px;
    margin-top: 10px;
    cursor: pointer;
  }

  span {
    position: relative;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
    
  }
`
export const Cart = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 0 0 50px 50px ;
  padding-top: 5px;
  border: 1px solid;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;
  //
  svg {
    scale: 0.8;
    margin-top: 10px;
    cursor: pointer;
    
  }

  span {
    position: relative;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }
`