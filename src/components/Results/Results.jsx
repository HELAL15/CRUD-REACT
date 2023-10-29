import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'

export default function Results() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    // Retrieve products from local storage when the component mounts
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  const addProduct = (product)=>{
    setProducts([...products, product])
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  }

  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };


  return (
    <>
    <div className="container">
      <h1 className="text-info text-center">CRUD APP USING REACT</h1>
      <Form addProduct={addProduct} />

<table className="table table-striped">
  <thead>
    <tr>
    <th scope="col" className='text-center'>index</th>
      <th scope="col" className='text-center'>productName</th>
      <th scope="col" className='text-center'>productPrice</th>
      <th scope="col" className='text-center'>productDiscount</th>
      <th scope="col" className='text-center'>productCategory</th>
      <th scope="col" className='text-center'>total</th>
      <th scope="col" className='text-center'>action</th>
    </tr>
  </thead>
  <tbody>
  {products.map((product, index) => 
        <tr key={index}>
          <td className='text-center' >{index+1}</td>
          <td className='text-center' >{product.name}</td>
          <td className='text-center' >{product.price}</td>
          <td className='text-center' >{product.discount}</td>
          <td className='text-center' >{product.category}</td>
          <td className='text-center' >{product.price - product.discount >1 ? product.price - product.discount : `minus ${product.price - product.discount}`}</td>
          <td className='text-center' ><button className="btn btn-outline-danger" 
            onClick={()=> deleteProduct(index)}
          ><i className="fas fa-trash"></i></button></td>
        </tr>
    )}
  </tbody>
</table>
    </div>
      
    </>
  )
}
