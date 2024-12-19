const initialState = {
    product: [],
    singleProduct: {},
    cart: [],
    shipping_fee: '5',
    total_price: ''
}
export const productReduce = (state = initialState, action) => {

    switch (action.type) {
        //All Products //
        case "MY_API_PRODUCT": {
            return {
                ...state,
                product: action.payload
            }
        }

        // Single Product//
        case "MY_SINGLE_PRODUCT": {
            return {
                ...state,
                singleProduct: action.payload
            }
        }
        case "ADD_TO_CART": {
            const { id, image, category, price, title, quantity } = action.payload;
            // TACKLE THE EXISTING PRODUCT   
            const existingProduct = state.cart.find((curItem) => curItem.id === id);
            if (existingProduct) {
                const updatedCart = state.cart.map((curElem) => {
                    if (curElem.id === id) {
                        const newQuantity = Math.min(curElem.quantity + quantity, 6);
                        return {
                            ...curElem,
                            quantity: newQuantity,
                        };
                    }
                    return curElem;
                });

                return {
                    ...state,
                    cart: updatedCart,
                };
            } else {
                const cartProduct = {
                    id,
                    image,
                    category,
                    price,
                    title,
                    quantity: Math.min(quantity, 6),
                };

                return {
                    ...state,
                    cart: [...state.cart, cartProduct],
                };
            }
        }

        // Cart Total Price //
        case "CART_TOTLE_PRICE": {
            let total_Price = state.cart.reduce((initialval, curElem) => {
                return initialval + curElem.price * curElem.quantity
            }, 0)
            return {
                ...state,
                total_price: total_Price
            }
        }

        //Increment //
        case "INCREMENT": {
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let newAmount = curElem.quantity + 1
                    if (newAmount >= 6) {
                        newAmount = 6
                    }
                    return {
                        ...curElem,
                        quantity: newAmount,
                    }
                } else {
                    return curElem
                }
            })
            return {
                ...state,
                cart: updatedProduct
            }
        }

        //Decrement//
        case "DECREMENT": {
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let decAmount = curElem.quantity - 1
                    if (decAmount <= 1) {
                        decAmount = 1
                    }
                    return {
                        ...curElem,
                        quantity: decAmount,
                    }
                } else {
                    return curElem;
                }
            })
            return {
                ...state,
                cart: updatedProduct
            }
        }

        //Remove //
        case "REMOVE_ITEM": {
            let removeProduct = state.cart.filter((curElem) =>
                curElem.id !== action.payload
            )
            return {
                ...state,
                cart: removeProduct
            }
        }

        //Clear cart//
        case "CLEAR_CART": {
            return {
                ...state,
                cart: []
            }
        }
        default: return state
    }
}