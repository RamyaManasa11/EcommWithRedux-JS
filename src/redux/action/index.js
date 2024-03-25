// For Adding Item to Cart
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}


// For Deleting Item from Cart
export const delCart = (product) => {
    return{
        type : "DELETEITEM",
        payload : product
    }
}