import styled from "styled-components";

export const CartWindowWrapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  left: -270px;
  top: 130px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.75);

  h1 {
    margin: 10px auto;
    text-align: center;
  }

`

export const CardsMini = styled.div`
  height: 350px;
  margin-top: 10px;
  overflow: scroll;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 10px auto;
    text-align: center;
    color: #545454;
  }
  
  &::-webkit-scrollbar {
    display: none;
  }
`