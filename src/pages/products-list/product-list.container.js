import React from 'react';
import ProductList from "./product-list"
import { productFetch, productAddToCart, removeFromCart } from "../../actions/ProductActions"
import { connect } from "react-redux";
class productListContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    render() { 
        const { productFetch, initialPRoductList, addToCart, cart, remove } = this.props
        productFetch()
        return (
            <ProductList productList={initialPRoductList} onAddedToCart={addToCart} cart={cart} remove={remove} />
         );
    }
}

const mapStateToProps = (state) => ({
    // isLoading: state.login.isLoading,
    // isLoggedIn: state.login.isLoggedIn,
    initialPRoductList: state.product.initialProductList,
    cart: state.product.cart
  });
const mapDispatchToProps = (dispatch) => ({
    productFetch: () => dispatch(productFetch()),
    addToCart: (data) => dispatch(productAddToCart(data)),
    remove: (item) => dispatch(removeFromCart(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(productListContainer);