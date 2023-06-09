import React, {createContext, useEffect, useState} from 'react';
import {catalogData} from "../commponent/Catalog/CatalogFakeData";
import {useDispatch, useSelector} from "react-redux";
import {setCatalogAC} from "../store/catalog-reducer";


export const CardContext = createContext(null)
const CardProvider = ({children}) => {

    const [catalog, setCard] = useState([])
    const [basket, setBasket]= useState([])

const [item,setItem] = useState({})
    const getItem = (id) => {
      setItem(catalog.find(el=> el.id === id))
    }
    const getBasket = (array, sizeItem,colorItem) => {

      let itemBasket= {...array, size: sizeItem, color: colorItem,}
       return  basket.map(el=>[...el, itemBasket])

    }

    useEffect(() => {
        // setCard(catalogData.map(el => el))
      setCard(catalogData.map(el=> el))
    }, [])
    console.log()

    return <CardContext.Provider value={{getBasket,catalog, basket: item, getBasketItem: getItem}}>{children}</CardContext.Provider>
};

export default CardProvider;