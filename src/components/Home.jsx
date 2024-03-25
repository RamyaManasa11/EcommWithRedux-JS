import React, { useState } from 'react';
import Product from './Product';
import CategoryDetails from './CategoryDetails';



const Home = () => {
    const category = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration"];
    const [selectedCategory, setSelectedCategory] = useState();

    const handleCategoryChange = (newContent) => {
        setSelectedCategory(newContent);
    }

    return (
        <div>
            <CategoryDetails selectedCategory={selectedCategory} />
            <Product categories={category} onChange={handleCategoryChange} />
        </div>
    )
}

export default Home;