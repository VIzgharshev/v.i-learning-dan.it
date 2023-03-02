import PropTypes from 'prop-types';
import {FavoritesWindowWrapper, CardsMini} from "./FavoritesWindow.styled.jsx";
import CardMiniFavorites from "../CardMini/CardMiniFavorites.jsx";

export default function FavoriteWindow(props) {
        return (
            <FavoritesWindowWrapper>
                <h1>FAVORITES</h1>
                <CardsMini>
                    {props.favorites.length === 0 ? <h3>Haven't items!</h3>
                        : props.favorites.map(item => <CardMiniFavorites item={item}
                                                                     key={item.article}
                                                                     onDeleteFavorites={props.onDeleteFavorites}/>)}
                </CardsMini>
            </FavoritesWindowWrapper>
        );
}

FavoriteWindow.propTypes = {
    favorites: PropTypes.array,
    onDeleteFavorites: PropTypes.func,
};