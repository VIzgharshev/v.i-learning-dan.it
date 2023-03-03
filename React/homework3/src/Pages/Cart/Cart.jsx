import {useContext} from "react";
import {AppContext} from "../../App.jsx";
import {CardsWrapper, PageWrapper} from "../Main/Main.styled.jsx";
import CardForCart from "../../Components/Card/CardForCart.jsx";
import ModalDelete from "../../Components/Modal/ModalDelete.jsx";

export default function Cart(props) {
    const context = useContext(AppContext)
    return (
        <>
            <PageWrapper>
                {context.cart.length === 0 ? <h3>No items</h3> :
                    <CardsWrapper>
                        {context.cart.map(item => <CardForCart product={item}
                                                               favorites={context.favorites}
                                                               key={item.article}
                                                               onModalShowHandler={context.modalDeleteShowHandler}
                                                               addFavorites={context.addFavorite}
                                                               deleteFavorites={context.deleteFavorites}/>)}
                        {context.showModal && <ModalDelete onCansel={context.modalCanselHandler}
                                                           item={context.boughtProd}
                                                           onOk={context.deleteFromBasket}/>}
                    </CardsWrapper>}

            </PageWrapper>
        </>
    );

}
