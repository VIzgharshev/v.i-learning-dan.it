import PropTypes from "prop-types";
import {useMemo, useState} from "react";
import Button from "../Button/Button.jsx";
import {CardWrapper, Img, CardFooter, CardHeader} from "./Card.styled.jsx";

export default function CardForCart(props) {
    let [svg, setSvg] = useState('none')

    useMemo(() => {
        for (const card of props.favorites) {
            card.article === props.product.article ? setSvg('black') : null
        }
    }, props.favorites);

    return (
        <CardWrapper>
            <Img>
                <img src={props.product.image} alt={props.product.name}/>
            </Img>
            <CardHeader color={props.product.color}>
                <h2>{props.product.name}</h2>
                <svg onClick={() => {
                    svg === 'none' ? setSvg('black') : setSvg('none')
                    svg === 'black' ? props.deleteFavorites(props.product)
                        : props.addFavorites(props.product)
                }
                }
                     viewBox="0 0 30 30"
                     width="40"
                     height="40"
                     fill={svg}
                     stroke="currentColor"
                     strokeWidth="1"
                     strokeLinecap="round"
                     strokeLinejoin="round">
                    <path
                        d="M12 2 L15.09 8.45 L22 9.55 L17 14.24 L18.18 21.01 L12 17.77 L5.82 21.01 L7 14.24 L2 9.55 L8.91 8.45 Z"/>
                </svg>
            </CardHeader>
            <CardFooter>
                <span>{props.product.price} $</span>
                <Button text={'DELETE'}
                        onClick={() => props.onModalShowHandler(props.product)}/>
            </CardFooter>
        </CardWrapper>
    );
}


CardForCart.propTypes = {
    product: PropTypes.object,
    onModalShowHandler: PropTypes.func,
    addFavorites: PropTypes.func,
    deleteFavorites: PropTypes.func,
}

