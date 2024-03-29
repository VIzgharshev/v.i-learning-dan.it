import styled from "styled-components";
export const CardWrapper = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 0 6px 1px rgb(0 0 0 / 20%);
  -webkit-box-shadow: 0 0 6px 1px rgb(0 0 0 / 20%);
  -moz-box-shadow: 0 0 6px 1px rgb(0 0 0 / 20%);
  padding: 20px;
  position: relative;
  text-align: left;
`
export const Img = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  img {
    scale: 0.8;
    width: 100%;
    align-content: center;
  }
`
export const CardHeader = styled.div`

  
  h2 {
    font-size: 26px;
    position: relative;
    margin: 10px 0;
  }
  
  h2::before {
    background-color: ${props => props.color};
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50px;
    position: absolute;
    top: -270px;
    left: 0;
    border: 1px solid grey;
  }

  h2::after {
    width: 100%;
    margin-top: 10px;
    content: '';
    display: block;
    height: 1px;
    background-color: #000000;
  }

  svg {
    position: absolute;
    right: 10px;
    top: 15px;
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