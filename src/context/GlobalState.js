import React, { useReducer } from 'react';
import ShopContext from './shop-context';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers';

const GlobalState = props => {
    const product = [
        {
            id: "001",
            title: "The Witcher",
            description: `
            Geralt of Rivia is a witcher, a mutant with special powers who kills monsters for money. The land is in a state of turmoil, due to the empire of Nilfgaard seeking to enlarge its territory. Among the refugees of this struggle is Cirilla, also known as Ciri, the Princess of Cintra, who is persecuted by Nilfgaard. She and Geralt are destinied to each other. In his adventures Geralt also meet Yennefer, a sorceress.`,
            image: "https://i.ytimg.com/vi/ndl1W4ltcmg/maxresdefault.jpg",
            price: 29.99
        },
        {
            id: "002",
            title: "Sense8",
            description: `
            The story of Sense8 begins when the psychic connection of eight strangers from different cultures and parts of the world is "birthed" by a woman called Angelica, who kills herself to avoid capture by a man named "Whispers". The eight eventually discover they now form a cluster of "sensates": human beings who are mentally and emotionally linked, can sense and communicate with each other, and can share their knowledge, language, and skills.`,
            image: "https://occ-0-987-990.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABZvo5er7M78_rzfB3QIsJ9StGyXItSe-21MCuFEQSIf9t7sZzLMwXqlfM_KwSo5Go966xLmIrSt_YUnW0SlLvdxhtJB4LhVm9fGrG7uDmzZaPRQUEs_j.jpg?r=af3",
            price: 39.99
        },
        {
            id: "003",
            title: "Game of Thrones",
            description: `
            Game of Thrones is roughly based on the storylines of A Song of Ice and Fire, set in the fictional Seven Kingdoms of Westeros and the continent of Essos. The series chronicles the violent dynastic struggles among the realm's noble families for the Iron Throne, while other families fight for independence from it. It opens with additional threats in the icy North and Essos in the east.`,
            image: "https://i.ytimg.com/vi/DkdbetJTZGA/maxresdefault.jpg",
            price: 19.99
        }
    ];

    const [cart, dispatch] = useReducer(shopReducer, []);

    const addProductToCart = product => {
        console.log("dispatch addProductToCart");
        dispatch({ type: ADD_PRODUCT, product });
    };

    const removeProductFromCart = productId => {
        console.log("dispatch removeProductFromCart");
        dispatch({ type: REMOVE_PRODUCT, productId });
    };

    return(
        <ShopContext.Provider 
            value={{
                product,
                cart,
                addProductToCart,
                removeProductFromCart
            }}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default GlobalState;