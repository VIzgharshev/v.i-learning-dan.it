import styled from "styled-components";

export const MiniCardWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  position: relative;
  
  svg:hover {
    cursor: pointer;
  }

  h2 {
    width: 150px;
    margin-left: 5px;
  }
  
  img {
    width: 100px;
    height: 100px;
    scale: 0.7;
  }
  span {
    font-size: 30px;
    font-weight: bold;
    color: #00434e;
    position: absolute;
    right: 20px;
  }
`