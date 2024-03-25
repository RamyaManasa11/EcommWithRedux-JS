import React, { useEffect, useState } from 'react';
import '../App.css';
import { addCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";


const Product= ({ categories, onChange }) => {

    const [productList, setProductList] = useState([]);
    const [filter, setFilter] = useState([]);
    const dispatch = useDispatch();
    // const cartItemDetails = useSelector((state) =>state.handleCart);

    const getProductDetails = async () => {
        const result = await fetch('https://dummyjson.com/products');
        const response = await result.json();
        setProductList(response.products);
        setFilter(response.products);
    }

    useEffect(() => {
        getProductDetails();
    }, []);

    const filterProduct = (category) => {
        const updatedList = productList.filter((x) => x.category === category);
        onChange(category);
        setFilter(updatedList);
    }

    const handleAddToCart = (item) => {
        toast.success("successfully added to cart...!");
        dispatch(addCart(item));
    }

    return (
        <>
            <div className="buttons d-flex justify-content-center ">
                <button id="btn1" className="btn btn-outline-dark me-2" onClick={() => { setFilter(productList); onChange("") }}>All</button>
                {
                    categories ? categories.map((item, index) => (
                        <button className="btn btn-outline-dark me-2" key={index} onClick={() => filterProduct(item)}>{item}</button>
                    )) : null
                }
            </div>
            <div className='product-container'>
                {
                    filter && filter.length > 0 ?
                        filter.map((item) =>
                            <div key={item.id} className='product-item'>
                                <img src={item.images[0]} width={250} height={200} alt="" />
                                <h5> {item.title}</h5>
                                <hr />
                                <p>Stock available: {item.stock}</p>
                                <p>Brand: {item.brand}</p>
                                <div className='flexSB'>
                                    <h5> ${item.price} </h5>
                                    <span className='icon itemstock'>
                                        {item.rating}
                                    </span>
                                </div>
                                <div className=''>
                                    <button className="btn btn-outline-dark" onClick={(() => handleAddToCart(item))}> Add to Cart </button>
                                </div>
                            </div>
                        ) :
                        <h5>Data Loading...!</h5>
                }
            </div>
        </>
    )
}

export default Product
