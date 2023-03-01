import styled from "styled-components";
import {Component} from "react";
import {Card} from "./Card/Card";
import {Modal} from "./Modal/Modal";
import {Header} from "./Header/Header";

const PageWrapper = styled.div`
  width: 1000px;
  margin: auto;
  position: relative;
`
const CardsWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 30px;
  margin: 20px;
`

export class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            productsList: [],
            favorites: JSON.parse(localStorage.getItem("favorites")) == null ? [] : JSON.parse(localStorage.getItem("favorites")),
            cart: JSON.parse(localStorage.getItem("cart")) == null ? [] : JSON.parse(localStorage.getItem("cart")), //сравнение с локал строредж
            buyProd: {}
        }
    }

    //

//---------------------------FUNCTIONS----------------------
    deleteFavorites = (product) => {
        let addedFavorites = [...JSON.parse(localStorage.getItem('favorites'))];
        addedFavorites = addedFavorites.filter(item => item.article !== product.article)
        localStorage.setItem("favorites", JSON.stringify(addedFavorites))
        this.setState({favorites: addedFavorites})
    }
    addFavorite = (product) => {
        let prod = [];
        if (localStorage.getItem("favorites")) {
            prod = [...JSON.parse(localStorage.getItem("favorites"))]
        }
        prod.push(product)
        localStorage.setItem("favorites", JSON.stringify(prod))
        this.setState({favorites: prod})
    }
    modalCanselHandler = () => {
        this.setState({showModal: false})
    };
    deleteFromCart = (product) => {
        let addedToCart = [...JSON.parse(localStorage.getItem('cart'))];
        addedToCart = addedToCart.filter(item => item.article !== product.article)
        localStorage.setItem("cart", JSON.stringify(addedToCart))
        this.setState({cart: addedToCart})
    }
    modalOkHandler = () => {
        this.setState({showModal: false})

        let productsAdded = [];
        if (localStorage.getItem('cart')) {
            productsAdded = [...JSON.parse(localStorage.getItem('cart'))]
        }
        productsAdded.push(this.state.buyProd)
        localStorage.setItem('cart', JSON.stringify(productsAdded))
        this.setState({cart: productsAdded})

    };
    modalShowHandler = (item) => {
        this.setState({buyProd: item})
        this.setState({showModal: true})
    };

    componentDidMount() {
        fetch('/data/productsList.json').then(res => res.json()).then(res => this.setState({productsList: res}))
    }

//---------------------------RENDER-------------------------

    render() {
        return (
            <PageWrapper>

                <Header favorites={this.state.favorites}
                        cart={this.state.cart}
                        onDeleteFavorites={this.deleteFavorites}
                        onDeleteFromCart={this.deleteFromCart}/>
                <CardsWrapper>
                    {this.state.productsList.map(item => <Card product={item}
                                                               key={item.article}
                                                               onModalShowHandler={this.modalShowHandler}
                                                               addFavorites={this.addFavorite}
                                                               deleteFavorites={this.deleteFavorites}
                                                               favorites={this.state.favorites}/>)}
                    {this.state.showModal && <Modal onCansel={this.modalCanselHandler}
                                                    onOk={this.modalOkHandler}/>}
                </CardsWrapper>
            </PageWrapper>

        );
    }
}

