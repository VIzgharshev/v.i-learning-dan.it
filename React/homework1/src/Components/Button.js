import {Component} from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  width: 160px;
  height: 60px;
  font-size: 24px;
  margin: 20px 8px;
  padding: 3px;
  border: none;
  border-radius: 5px;
  color: aliceblue;
  background-color: ${props => props.bgcolor};
  &:hover {
    cursor: pointer;
  }
`
export class Button extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <StyledButton {...this.props}>{this.props.text}</StyledButton>
        )
    }
}
