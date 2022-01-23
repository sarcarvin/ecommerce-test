import React, { Component } from "react";
import { storeProducts } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = (filteredSize='') => {
    let tempProducts = [];
    storeProducts.forEach(item => {
        if(filteredSize.length===0 || item.size.findIndex(x=>x.toLowerCase() === filteredSize.toLowerCase())!==-1){
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        }
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  handleFilter = (filteredSize='') => {
    console.log("hello from Filter");
    this.setProducts(filteredSize);

  };

  addToCart = id => {
    console.log(`hello from add to cart is ${id} `);
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleFilter: this.handleFilter,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
