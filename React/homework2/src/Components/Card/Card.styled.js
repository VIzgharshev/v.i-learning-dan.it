import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.75);
  padding: 20px;
  position: relative;
`
export const Img = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    scale: 0.8;
    width: 100%;
    align-content: center;
  }
`
export const CardHeader = styled.div`
  h2 {
    font-size: 26px;
  }

  h2::after {
    width: 100%;
    margin-top: 10px;
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: #000000;
  }

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  svg:hover {
    cursor: pointer;
  }
`
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span {
    font-weight: bold;
    color: #00434e;
    font-size: 30px;
  }
`