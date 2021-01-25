import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar/TopBar';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cartItem : [],
      productList: [
        {
          id: 1,
          name: 'Product 1',
          price: 510,
          imageUrl: 'https://placehold.it/700*400',
          rating: 5,
          description: 'lorem',
          currency: '$'
        },
        {
          id: 2,
          name: 'iPhone',
          price: 250,
          imageUrl: 'https://placehold.it/700*400',
          rating: 3,
          description: 'lorem',
          currency: '$'
        },
        {
          id: 3,
          name: 'S21 Ultra',
          price: 250,
          imageUrl: 'https://placehold.it/700*400',
          rating: 5,
          description: 'lorem',
          currency: '$'
        },
        {
          id: 4,
          name: 'MacBook Pro Ultra',
          price: 3450,
          imageUrl: 'https://placehold.it/700*400',
          rating: 4.9,
          description: 'lorem',
          currency: '$'
        }
      ],
      total: 0
    }
  }

  updateCart = (product) =>{
    this.setState({
      cartItem: [...this.state.cartItem, product]
    });
    let newTotal = this.state.total + product.price;
    this.setState({
      total: newTotal
    });
  }
  removeCart = (product) =>{
    this.setState({
      cartItem: this.state.cartItem.filter((obj)=>obj.id!=product.id)
    });
    let newTotal = this.state.total - product.price;
    this.setState({
      total: newTotal
    });
  }
  render(){
    return (
      <>
        <TopBar></TopBar>
        <div className="container">
          <div className="row">
            <Cart cartList = {this.state.cartItem} total = {this.state.total} removeCart = {this.removeCart}></Cart>
            <ProductList productList = {this.state.productList} selectedItem = {this.state.cartItem} updateCart = {this.updateCart}></ProductList>
          </div>
        </div>
      </>
    )
  }
}

export default App;
