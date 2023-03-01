import {Component} from "react";
import PropTypes from "prop-types";
import {Button} from "../Button/Button";
import {CardWrapper, Img, CardFooter, CardHeader} from "./Card.styled";

export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            svg: 'none',
        }
    }

    changeSVGColorHandler = () => {
        if(this.state.svg === 'none') {
            this.setState({svg: 'black'});
        } else {
            this.setState({svg: 'none'});
        }
    }
    render() {
        for (const card of this.props.favorites) {
            if(card.article === this.props.product.article) {
                this.state.svg = 'black'
            }
        }
        return (
            <CardWrapper>
                <Img>
                    <img src={this.props.product.image} alt={this.props.product.name}/>
                </Img>
                <CardHeader  color={this.props.product.color}>
                    <h2>{this.props.product.name}</h2>
                    <svg onClick={() => {
                        this.changeSVGColorHandler()
                        this.state.svg === 'black' ? this.props.deleteFavorites(this.props.product)
                            : this.props.addFavorites(this.props.product)
                    }
                    }
                         viewBox="0 0 30 30"
                         width="40"
                         height="40"
                         fill={this.state.svg}
                         stroke="currentColor"
                         strokeWidth="1"
                         strokeLinecap="round"
                         strokeLinejoin="round">
                        <path d="M12 2 L15.09 8.45 L22 9.55 L17 14.24 L18.18 21.01 L12 17.77 L5.82 21.01 L7 14.24 L2 9.55 L8.91 8.45 Z" />
                    </svg>
                </CardHeader>
                <CardFooter>
                    <span>{this.props.product.price} $</span>
                    <Button text={'ADD TO CART'}
                            onClick={() => this.props.onModalShowHandler(this.props.product)}/>
                </CardFooter>
            </CardWrapper>
        );
    }
}


Card.propTypes = {
    product: PropTypes.object,
    onModalShowHandler: PropTypes.func,
    addFavorites: PropTypes.func,
    deleteFavorites: PropTypes.func,
}

