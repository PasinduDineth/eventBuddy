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
        const { productFetch, initialProductList, addToCart, cart, remove, total } = this.props
        productFetch()
        return (
            <ProductList productList={initialProductList} onAddedToCart={addToCart} cart={cart} remove={remove} total={total} />
         );
    }
}

const mapStateToProps = (state) => ({
    // isLoading: state.login.isLoading,
    // isLoggedIn: state.login.isLoggedIn,
    initialProductList: state.product.initialProductList,
    cart: state.product.cart,
    total: state.product.total
});
const mapDispatchToProps = (dispatch) => ({
    productFetch: () => dispatch(productFetch()),
    addToCart: (data) => dispatch(productAddToCart(data)),
    remove: (item) => dispatch(removeFromCart(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(productListContainer);