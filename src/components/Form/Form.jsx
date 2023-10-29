
import React, { useState } from 'react';

export default function Form({ addProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handelCrud(e) {
    e.preventDefault();

    if (!name || !price || !discount || !category || name.trim() === '' || price.trim() === '' || discount.trim() === '' || category.trim() === '') {
      setErrorMessage('Please fill in all fields.');
      return;
    } else {
      setErrorMessage('');
    }

    // Create a product object with the input values
    const product = {
      name: name.trim(),
      price: price.trim(),
      discount: discount.trim(),
      category: category.trim(),
    };

    addProduct(product);

    setName('');
    setPrice('');
    setDiscount('');
    setCategory('');
  }

  return (
    <>
      <form action='' onSubmit={handelCrud} className='my-5'>
        {errorMessage && <h2 className="alert text-white text-center bg-danger">{errorMessage}</h2>}
        <div className="row g-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder='productName'
              name='productName'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              placeholder='price'
              name='productPrice'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              placeholder='discount'
              name='productDisc'
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder='category'
              name='productCategory'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="col">
            <button className="btn btn-outline-info">add product</button>
          </div>
        </div>
      </form>
    </>
  );
}
