import {CardsWrapper, PageWrapper} from "../Main/Main.styled.jsx";
import Card from "../../Components/Card/Card.jsx";
import Modal from "../../Components/Modal/Modal.jsx";
import {useContext} from "react";
import {AppContext} from "../../App.jsx";

export default function Favorites(props) {
    const context = useContext(AppContext)
    return (
        <>
            <PageWrapper>
                {context.favorites.length === 0 ? <h3>No items</h3> :
                    <CardsWrapper>
                        {context.favorites.map(item => <Card product={item}
                                                             favorites={context.favorites}
                                                             key={item.article}
                                                             onModalShowHandler={context.modalShowHandler}
                                                             addFavorites={context.addFavorite}
                                                             deleteFavorites={context.deleteFavorites}/>)}
                        {context.showModal && <Modal onCansel={context.modalCanselHandler}
                                                     onOk={context.addToBasket}/>}
                    </CardsWrapper>
                }
            </PageWrapper>
        </>
    );
}

