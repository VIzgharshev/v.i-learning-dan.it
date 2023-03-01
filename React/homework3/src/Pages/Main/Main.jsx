import Card from "../../Components/Card/Card.jsx";
import Modal from "../../Components/Modal/Modal.jsx";
import {PageWrapper, CardsWrapper} from './Main.styled'

export default function Main(props) {
    return (
        <>
            <PageWrapper>
                <CardsWrapper>
                    {props.productsList.map(item => <Card product={item}
                                                    key={item.article}
                                                    onModalShowHandler={props.modalShowHandler}
                                                    addFavorites={props.addFavorite}
                                                    deleteFavorites={props.deleteFavorites}/>)}
                    {props.showModal && <Modal onCansel={props.modalCanselHandler}
                                         onOk={props.addToBasket}/>}
                </CardsWrapper>
            </PageWrapper>
        </>
    );

}

