
const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //verifying whether the product already exists
            const itemExists = state.find((x) => x.id === product.id);
            if (itemExists) {
                return state.map((x) => x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x);
            }
            //if Item doesn't exists
            else {
                return [...state, {...product, quantity: 1}]
            }

        case "DELETEITEM":
            //verifying whether the product is already exists or not
            const productExists = state.find((x)=> x.id === product.id);
            if(productExists.quantity === 1){
                return state.filter((x) => x.id !==productExists.id);
            }
            else{
                return state.map((x)=> x.id === product.id ? {...x, quantity: x.quantity-1} : x);
            }


        default:
            return state;
    }

}

export default handleCart;