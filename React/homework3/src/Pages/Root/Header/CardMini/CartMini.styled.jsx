import styled from "styled-components";

export const MiniCardWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  position: relative;
  
  svg {
    margin-left: 15px;
  }
  
  svg:hover {
    cursor: pointer;
  }

  h2 {
    width: 150px;
    margin-left: 5px;
  }
  
  img {
    max-width: 150px;
    max-height: 100%;
    margin: auto 20px;
    scale: 1.3;
    top: 0;
  }
  span {
    font-size: 30px;
    font-weight: bold;
    color: #00434e;
    position: absolute;
    right: 25px;
  }
`