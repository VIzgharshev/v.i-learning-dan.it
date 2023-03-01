import PropTypes from "prop-types";
import {useState} from "react";
import Button from "../Button/Button";
import {CardWrapper, Img, CardFooter, CardHeader} from "./Card.styled";

export default function Card(props) {

    const [svg, setSvg] = useState('none')

    // function changeSVGColorHandler() {
    //     svg === 'none' ? setSvg('black') : setSvg('none')
    //     }
    // }
    return (
        <CardWrapper>
            <Img>
                <img src={props.product.image} alt={props.product.name}/>
            </Img>
            <CardHeader color={props.product.color}>
                <h2>{props.product.name}</h2>
                <svg onClick={() => {
                    svg === 'none' ? setSvg('black') : setSvg('none')
                    this.state.svg === 'black' ? props.deleteFavorites(props.product)
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
                <Button text={'ADD TO CART'}
                        onClick={() => props.onModalShowHandler(props.product)}/>
            </CardFooter>
        </CardWrapper>
    );
}


Card.propTypes = {
    product: PropTypes.object,
    onModalShowHandler: PropTypes.func,
    addFavorites: PropTypes.func,
    deleteFavorites: PropTypes.func,
}

