import React, { Component } from "react";
import styled from "styled-components";
// import { ProductConsumer } from "../context";
import { PropTypes } from "prop-types";

export default class Product extends Component {
  render() {
    const { index, isSale, isExclusive, price, productName, size, productImage } = this.props.product;
    return (
      <ProductWrapper className="col-9 col-md-6 col-lg-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => {
              console.log("you clicked me on image container");
            }}
          >
              <img src={productImage} alt="product" className="card-img-top" />
            
              {isSale && (
                <label className ="sale"            
                >
                  Sale
                
            </label>)
  }
             {isExclusive && (
              <label className ="exclusive"            
              >
                Exclusive
              
          </label>)
  }
          </div>
          {/*card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{productName}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">{price}</span>
              {}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    index: PropTypes.number,
    productImage: PropTypes.string,
    isSale: PropTypes.bool,
    price: PropTypes.string,
    isExclusive: PropTypes.bool,
    productName:PropTypes.string,
    size:PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
  }
  &:hover {
    // .card {
    //   border: 0.04rem solid rgba(0, 0, 0, 0.2);
    //   box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
    // }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }


  .cart-btn {
    position: absolute;
    background-color: #ff1a1a;
    color: #ffffff
    bottom: 0;
    right: 0;
    // padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .sale{
    color: #ffffff;
    background: #ff1a1a;
    width: 40%;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    padding: 5px 0 25px 0;
  }
  // .img-container:hover .cart-btn {
  //   transform: translate(0, 0);
  // }
  // .cart-btn:hover {
  //   color: var(--mainBlue);
  //   cursor: pointer;
  // }
`;
