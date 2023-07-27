// {
//     type: '',
//     payload: {}
// }

export const ADD_TO_CART = 'ADD_TO_CART';
export const DEL_ITEM_IN_CART = 'DEL_ITEM_IN_CART';
export const UPDATE_ITEM_IN_CART = 'UPDATE_ITEM_IN_CART';

// Action creators
export function addToCart(addedProduct){
    return {
        type: ADD_TO_CART,
        payload: addedProduct
    }
}

export function delItemInCart(id){
    return {
        type: DEL_ITEM_IN_CART,
        payload: id
    }
}

export function updateItemInCart(product) {
    return {
        type: UPDATE_ITEM_IN_CART,
        payload: product
    }
}