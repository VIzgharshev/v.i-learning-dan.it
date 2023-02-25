import {Component} from 'react';
import PropTypes from "prop-types";
import {IconsWrapper, Favorite, Cart} from "./Icons.styled";
import {FavoriteWindow} from '../../FavoritesWindow/FavoriteWindow';
import {CartWindow} from "../../CartWindow/CartWindow";

export class Icons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritesWindow: false,
            cartWindow: false,
        }
    }

    showFavoriteWindowHandler = () => {
        this.setState({favoritesWindow: !this.state.favoritesWindow})
    }
    showCartWindowHandler = () => {
        this.setState({cartWindow: !this.state.cartWindow})
    }

    render() {
        return (
            <IconsWrapper>
                <Favorite>
                    <svg onClick={this.showFavoriteWindowHandler}
                         viewBox="0 0 30 30"
                         width="60"
                         height="60"
                         fill='none'
                         stroke="currentColor"
                         strokeWidth="1.5"
                         strokeLinecap="round"
                         strokeLinejoin="round">
                        <path
                            d="M12 2 L15.09 8.45 L22 9.55 L17 14.24 L18.18 21.01 L12 17.77 L5.82 21.01 L7 14.24 L2 9.55 L8.91 8.45 Z"/>
                    </svg>
                    <span>{this.props.favorites.length}</span>
                </Favorite>
                <Cart>
                    <svg onClick={this.showCartWindowHandler}
                         xmlns="http://www.w3.org/2000/svg"
                         width="60px"
                         height="60px"
                         viewBox="0 0 24 24" fill="none">
                        <path
                            d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
                            stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{this.props.cart.length}</span>
                </Cart>
                {this.state.favoritesWindow && <FavoriteWindow favorites={this.props.favorites}
                                                               onDeleteFavorites={this.props.onDeleteFavorites}/>}
                {this.state.cartWindow && <CartWindow cart={this.props.cart}
                                                      onDeleteFromCart={this.props.onDeleteFromCart}/>}
            </IconsWrapper>
        );
    }
}

Icons.propTypes = {
    favorites: PropTypes.array,
    cart: PropTypes.array,
    onDeleteFavorites: PropTypes.func,
    onDeleteFromCart: PropTypes.func,
}