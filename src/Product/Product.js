import React, { Component } from 'react';

export default class Product extends Component{

    addToCart = () => {
        this.props.updateCart(this.props.product)
    }
    render(){
        return (
            <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{this.props.product.name}</a>
                    </h4>
                    <h5>{this.props.product.currency}{this.props.product.price}</h5>
                    <p className="card-text">{this.props.product.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    <button className="btn btn-primary btn-sm" disabled = {this.props.isDisabled}
                    onClick = {this.addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
        )
    }
}