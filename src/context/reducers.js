export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const addProductToCart = (product, cart) => {
    let i = 0;
    console.log("product");
    console.log(product);
    console.log("cart");
    console.log(cart);
    let updatedCart = [...cart];
    console.log("updatedCart");
    console.log(updatedCart);
    if (updatedCart.length !== 0) i = updatedCart.findIndex(e => e.id === product.id);
    console.log("i");
    console.log(i);
    if (i > 0) updatedCart[i].quantity++;
    else updatedCart.push({
        id: product.id,
        title: product.title,
        quantity: 1
    });
    return updatedCart;
};

const removeProductFromCart = (productId, cart) => {
    let i = 0;
    let updatedCart = [...cart];
    if (updatedCart.length !== 0) i = updatedCart.findIndex(e => e.id === productId);
    if (i > 0 && updatedCart[i].quantity > 1) updatedCart[i].quantity--;
    else if (i > 0 && updatedCart[i].quantity === 1) updatedCart.splice(i, 1);
    return updatedCart;
};

export const shopReducer = (cart, action) => {
    console.log("action");
    console.log(action);
    console.log("cart");
    console.log(cart);
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.product, cart);
        case REMOVE_PRODUCT:
            return removeProductFromCart(action.productId, cart);
        default:
            return cart;
    }
};
