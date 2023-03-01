import PropTypes from "prop-types";
import {MiniCardWrapper} from "./CartMini.styled"
export default function CardMiniFavorites(props) {
    return (
        <MiniCardWrapper>
            <svg onClick={() => props.onDeleteFavorites(props.item)}
                 viewBox="0 0 24 24" width="20" height="20"
                 fill="black" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" onClick={(e) => e.stopPropagation()}/>
                <line x1="6" y1="6" x2="18" y2="18" onClick={(e) => e.stopPropagation()}/>
            </svg>
            <img src={props.item.image} alt={props.item.name}/>
            <h2>{props.item.name}</h2>
            <span>{props.item.price}$</span>
        </MiniCardWrapper>
    );
}


CardMiniFavorites.propTypes = {
    item: PropTypes.object,
    onDeleteFavorites: PropTypes.func,
}