import React, { Component } from 'react';
import Product from '../Product/Product'

export default class ProductList extends Component {
    render() {
        return (
            <div className="col-lg-9">
                <div className="row">
                    {
                        this.props.productList.map((product)=>{
                            let selectedProduct = this.props.selectedItem.filter((selectedObj)=>{
                                return product.id === selectedObj.id
                            });
                            return <Product product = {product} isDisabled = {(selectedProduct.length>0) ? true: false} updateCart = {this.props.updateCart}></Product>
                        })
                    }
                </div>
            </div>
        )
    }
}