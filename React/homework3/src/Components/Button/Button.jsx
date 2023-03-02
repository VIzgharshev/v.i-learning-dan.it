import PropTypes from "prop-types";
import {StyledButton} from "./Button.styled.jsx";

export default function Button(props) {
        return (
            <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
        )
}

Button.propTypes = {
    text: PropTypes.string,
}