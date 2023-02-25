import {Component} from 'react';
import PropTypes from "prop-types";
import logo from '../../img/logo.png'
import {HeaderWrapper, Navbar, NavItem} from "./Header.styled";
import {Icons} from "./Icons/Icons";


export class Header extends Component {
    render() {
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
                <Icons favorites={this.props.favorites}
                       cart={this.props.cart}
                       onDeleteFavorites={this.props.onDeleteFavorites}
                       onDeleteFromCart={this.props.onDeleteFromCart}/>
            </HeaderWrapper>
        );
    }
}

Header.propTypes = {
    favorites: PropTypes.array,
    cart: PropTypes.array,
    onDeleteFavorites: PropTypes.func,
    onDeleteFromCart: PropTypes.func,
}
