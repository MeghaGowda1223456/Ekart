import axios from 'axios';
import React, { useState } from 'react';
import axiosInstance from './../config/axiousConfig';

function AddProduct(props) {
    const [product, setproduct] = useState({
        productName: '',
        productPrice: '',
        productImageURL: '',
        productDescription: ''
    });

    const handleChange = (event) => {
        const productCopy = { ...product }
        productCopy[event.target.name] = event.target.value
        setproduct(productCopy)
    }
    const addProduct = async () => {
        console.log(product);
        const url = 'api/products'
        try {
            const response = await axiosInstance.post(url, product)
            console.log(response.data);
            if (response.data.error === false) {
                props.history.push('/products')
            } else {
                alert(response.data.message)
            }
        } catch (err) {
            console.log(err);
        }
    }
    return <div>
        <div className="row">
            <div className="col">
                <input type="text"
                    name="productName"
                    value={product.productName}
                    onChange={(event) => { handleChange(event) }}
                    className="form-control" placeholder="Product Name" />
            </div>
            <div className="col">
                <input type="number"
                    name="productPrice"
                    value={product.productPrice}
                    onChange={handleChange}
                    className="form-control" placeholder="Product Price" />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input type="text"
                    name="productImageURL"
                    value={product.productImageURL}
                    onChange={handleChange}
                    className="form-control" placeholder="Product Image" />
            </div>
            <div className="col">
                <input type="text"
                    name="productDescription"
                    value={product.productDescription}
                    onChange={handleChange}
                    className="form-control" placeholder="Product Description" />
            </div>
        </div>
        <div className='text-center'>
            <button className="btn btn-primary"
                onClick={addProduct}>Add Product</button>
        </div>
    </div>;
}

export default AddProduct;
