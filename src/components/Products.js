import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import EditProduct from './EditProduct';
import axiosInstance from './../config/axiousConfig';

function Products() {
    const [products, setproducts] = useState([]);
    const [showEditProduct, setshowEditProduct] = useState(false);
    const [selectedProduct, setselectedProduct] = useState({
        productName: '',
        productPrice: '',
        productImageURL: '',
        productDescription: ''
    });
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const url = 'api/products'
        try {
            const response = await axiosInstance.get(url)
            console.log(response);
            console.log(response.data);
            setproducts(response.data.products)
        } catch (err) {
            console.log(err);
        }
    }

    const deleteProduct = async (productId) => {
        console.log(productId);
        const url = `api/products/${productId}`
        try {
            const response = await axiosInstance.delete(url)
            console.log(response.data);
            /*  const productsCopy = [...products]
             const filteredProducts = productsCopy.filter((prod) => {
                 return prod._id !== productId
             })
             setproducts(filteredProducts) */
            // OR
            fetchProducts()
        } catch (err) {
            console.log(err);
        }
    }
    const editProduct = (prod) => {
        setselectedProduct(prod)
        setshowEditProduct(true)
    }
    return <div>
        <Table striped bordered hover>
            <thead>
                <tr><th>Length</th>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Image</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 ? products.map((product, index) => {
                    return <tr key={product._id}>
                        <td>{products.length}</td>
                        <td>{product._id}</td>
                        <td>{product.productName}</td>
                        <td>{product.productPrice}</td>
                        <td><img style={{
                            width: '50px',
                            height: '50px'
                        }} src={product.productImageURL} /></td>
                        <td>{product.productDescription}</td>
                        <td>
                            <button className="btn btn-primary"
                                onClick={() => {
                                    editProduct(product)
                                }}>
                                Edit
                            </button>
                        </td>
                        <td><button className='btn btn-danger'
                            onClick={() => {
                                deleteProduct(product._id)
                            }}>Delete</button></td>
                    </tr>
                }):<p>No Records found</p>}
            </tbody>
        </Table>

        <EditProduct showEditProduct={showEditProduct}
            setshowEditProduct={setshowEditProduct} 
            selectedProduct={selectedProduct}
            fetchProducts={fetchProducts}/>
    </div>;
}

export default Products;
