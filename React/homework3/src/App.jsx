import {createContext, useEffect, useState} from 'react'
import Loading from "./Components/Loading/Loading.jsx";
import Header from "./Pages/Root/Header/Header.jsx";
import {Outlet} from "react-router-dom";

export const AppContext = createContext({
    favorites: [],
    cart: [],
    showModal: false,
    productsList: [],
    boughtProd: {},
    deleteFavorites: () => {},
    deleteFromBasket: () => {},
    modalShowHandler: () => {},
    addToBasket: () => {},
    modalCanselHandler: () => {},
    modalDeleteShowHandler: () => {},
    addFavorite: () => {},
});


export default function App() {
    let [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const [productsList, setProductsList] = useState([]);
    const [boughtProd, setBoughtProd] = useState({});
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) == null ? [] : JSON.parse(localStorage.getItem("favorites")));
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) == null ? [] : JSON.parse(localStorage.getItem("basket")));


    useEffect(() => {
            async function fetched() {
                const response = await fetch('/data/productsList.json')
                    .then(res => res.json())
                setProductsList(response)
            }

            fetched()
        },
        []);

//---------------------------FUNCTIONS----------------------
    function addFavorite(product) {
        let newFavorite = [];
        if (localStorage.getItem("favorites")) {
            newFavorite = [...JSON.parse(localStorage.getItem("favorites"))]
        }
        newFavorite.push(product)
        localStorage.setItem("favorites", JSON.stringify(newFavorite))
        return setFavorites(newFavorite)
    }

    function modalCanselHandler() {
        return setShowModal(false)
    }

    function addToBasket() {
        setShowModal(false)
        let newBasket = [];
        if (localStorage.getItem('basket')) {
            newBasket = [...JSON.parse(localStorage.getItem('basket'))]
        }
        newBasket.push(boughtProd)
        localStorage.setItem('basket', JSON.stringify(newBasket))
        return setBasket(newBasket)
    }

    function modalShowHandler(item) {
        item = {...item, article: item.article + Math.floor(Math.random()*101) }
        setBoughtProd(item)
        setShowModal(true)
    }
    function modalDeleteShowHandler(item) {
        setBoughtProd(item)
        setShowModal(true)
    }

    function deleteFavorites(product) {
        let addedFavorites = [...JSON.parse(localStorage.getItem('favorites'))];
        addedFavorites = addedFavorites.filter(item => item.article !== product.article)
        localStorage.setItem("favorites", JSON.stringify(addedFavorites))
        return setFavorites(addedFavorites)
    }

    function deleteFromBasket(product) {
        let addedToBasket = [...JSON.parse(localStorage.getItem('basket'))];
        addedToBasket = addedToBasket.filter(item => item.article !== product.article)
        localStorage.setItem("basket", JSON.stringify(addedToBasket))
        return setBasket(addedToBasket)
    }


    //-------------------CONTEXT--------------

    return (
        <AppContext.Provider value={
            {
                favorites,
                cart: basket,
                showModal,
                productsList,
                boughtProd,
                deleteFavorites,
                deleteFromBasket,
                modalShowHandler,
                addToBasket,
                modalCanselHandler,
                modalDeleteShowHandler,
                addFavorite,
            }
        }>

            {loading && <Loading onLoad={setTimeout(() => setLoading(loading = false), 2500)}/>}
            <Header favorites={favorites}
                    cart={basket}
                    deleteFavorites={deleteFavorites}
                    deleteFromBasket={deleteFromBasket}/>
            <Outlet/>
        </AppContext.Provider>

    )
}