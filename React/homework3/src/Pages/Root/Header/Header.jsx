import PropTypes from "prop-types";
import logo from '../../../assets/img/logo.png'
import {HeaderWrapper, Navbar, NavItem} from "./Header.styled.jsx";
import Icons from "./Icons/Icons.jsx";
import {Link, Outlet} from "react-router-dom";


export default function Header(props) {
    return (
        <>
            <HeaderWrapper>
                <img src={logo} alt="apple logo"/>
                <Navbar>
                    <NavItem>
                        <Link to="/">home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="favorites">favorites</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="cart">cart</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="contacts">contacts</Link>
                    </NavItem>
                </Navbar>
                <Icons favorites={props.favorites}
                       cart={props.cart}
                       onDeleteFavorites={props.deleteFavorites}
                       onDeleteFromCart={props.deleteFromBasket}/>
            </HeaderWrapper>
        </>
    );

}

Header.propTypes = {
    favorites: PropTypes.array,
    cart: PropTypes.array,
    onDeleteFavorites: PropTypes.func,
    onDeleteFromCart: PropTypes.func,
}
