import PropTypes from "prop-types";
import logo from '../../../assets/img/logo.png'
import {HeaderWrapper, Navbar, NavItem} from "./Header.styled";
import Icons from "./Icons/Icons";


export default function Header(props) {
    return (
        <HeaderWrapper>
            <img src={logo} alt="apple logo"/>
            <Navbar>
                <NavItem>
                    <a href="v.i-learning-dan.it/React/homework2/src/Components#">home</a>
                </NavItem>
                <NavItem>
                    <a href="v.i-learning-dan.it/React/homework2/src/Components#">galery</a>
                </NavItem>
                <NavItem>
                    <a href="v.i-learning-dan.it/React/homework2/src/Components#">store</a>
                </NavItem>
                <NavItem>
                    <a href="v.i-learning-dan.it/React/homework2/src/Components#">contacts</a>
                </NavItem>
            </Navbar>
            <Icons favorites={props.favorites}
                   cart={props.cart}
                   onDeleteFavorites={props.onDeleteFavorites}
                   onDeleteFromCart={props.onDeleteFromCart}/>
        </HeaderWrapper>
    );

}

Header.propTypes = {
    favorites: PropTypes.array,
    cart: PropTypes.array,
    onDeleteFavorites: PropTypes.func,
    onDeleteFromCart: PropTypes.func,
}
