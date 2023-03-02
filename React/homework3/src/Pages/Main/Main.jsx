import Card from "../../Components/Card/Card.jsx";
import Modal from "../../Components/Modal/Modal.jsx";
import {PageWrapper, CardsWrapper} from './Main.styled.jsx'
import {useContext} from "react";
import {AppContext} from '../../App.jsx'


export default function Main(props) {
    const context = useContext(AppContext)
    return (
        <>
            <PageWrapper>
                    <CardsWrapper>
                        {context.productsList.map(item => <Card product={item}
                                                                favorites={context.favorites}
                                                                key={item.article}
                                                                onModalShowHandler={context.modalShowHandler}
                                                                addFavorites={context.addFavorite}
                                                                deleteFavorites={context.deleteFavorites}/>)}
                        {context.showModal && <Modal onCansel={context.modalCanselHandler}
                                                     onOk={context.addToBasket}/>}
                    </CardsWrapper>
            </PageWrapper>
        </>
    );

}

