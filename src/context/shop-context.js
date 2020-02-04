import React from 'react';

export default React.createContext({
    product: [],
    cart: [],
    addProductToCart: () => {},
    removeProductFromCart: () => {}
});
