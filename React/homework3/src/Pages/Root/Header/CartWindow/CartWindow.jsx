import PropTypes from "prop-types";
import {CartWindowWrapper, CardsMini} from "./CartWindow.styled.jsx";
import CardMiniCart from "../CardMini/CardMiniCart.jsx";

export default function CartWindow(props) {
        return (
            <CartWindowWrapper>
                <h1>CART</h1>
                <CardsMini>
                    {props.cart.length === 0 ? <h3>Haven't items!</h3>
                        : props.cart.map(item => <CardMiniCart item={item}
                                                                key={item.article}
                                                                onDeleteFromCart={props.onDeleteFromCart}/>)
                    }
                </CardsMini>
            </CartWindowWrapper>
        );
}

CartWindow.propTypes = {
    cart: PropTypes.array,
    onDeleteFromCart: PropTypes.func,
}