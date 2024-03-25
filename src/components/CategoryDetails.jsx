import React from 'react';

const CategoryDetails = ({ selectedCategory }) => {
  return (
    ((selectedCategory)
      ?
        <h4>Selected Category: {selectedCategory}</h4>
      :
      null
    ))
}

export default CategoryDetails
