import {Component} from 'react';
import PropTypes from "prop-types";
import {StyledButton} from "./Button.styled";

export class Button extends Component {
    render () {
        return (
            <StyledButton onClick={this.props.onClick}>{this.props.text}</StyledButton>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string,
}