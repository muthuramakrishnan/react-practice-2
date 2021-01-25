import React, { Component } from 'react';

export default class Cart extends Component {



    render() {
        return (
            <div className="col-lg-3">

                <h1 className="my-4">Shop Name</h1>
                <ul className="list-group">
                    {
                        this.props.cartList.map((cartItem)=>{
                            return (
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                {cartItem.name} - {cartItem.currency} {cartItem.price}
                                <span className="badge badge-primary badge-pill">
                                    <button className="btn btn-primary btn-sm" onClick = {()=>this.props.removeCart(cartItem)}>X</button>
                                </span>
                                </li>
                            )
                        })
                    }

                </ul>
                <h1>Total: ${this.props.total}</h1>

            </div>
        )
    }
}