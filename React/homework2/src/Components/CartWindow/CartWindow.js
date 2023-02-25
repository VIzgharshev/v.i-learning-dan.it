import {Component} from "react";
import PropTypes from "prop-types";
import {CartWindowWrapper, CardsMini} from "./CartWindow.styled";
import {CardMiniCart} from "../Card/CardMiniCart";
export class CartWindow extends Component {
    render() {
        return (
            <CartWindowWrapper>
                <h1>CART</h1>
                <CardsMini>
                    {this.props.cart.length === 0 ? <h3>Haven't items!</h3>
                        : this.props.cart.map(item => <CardMiniCart item={item}
                                                                key={item.article}
                                                                onDeleteFromCart={this.props.onDeleteFromCart}/>)
                    }
                </CardsMini>
            </CartWindowWrapper>
        );
    }
}

CartWindow.propTypes = {
    cart: PropTypes.array,
    onDeleteFromCart: PropTypes.func,
}