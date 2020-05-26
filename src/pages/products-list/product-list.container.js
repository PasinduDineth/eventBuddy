import React from 'react';
import ProductList from "./product-list"
import { productFetch, productAddToCart, removeFromCart } from "../../actions/ProductActions"
import { register } from "../../actions/RegisterAction"
import { connect } from "react-redux";
class productListContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    onModalActionPress= (data) => {
        const { register } = this.props
        if(data.type === "Register") {
            register(data)
        }
        else {
            // login()
        }
    }
    render() { 
        const { productFetch, initialProductList, addToCart, cart, remove, total, isError, registerMessage } = this.props
        productFetch()
        return (
            <ProductList productList={initialProductList} onAddedToCart={addToCart} cart={cart} remove={remove} total={total} onModalActionPress={this.onModalActionPress} registerMessage={registerMessage} isError={isError}/>
         );
    }
}

const mapStateToProps = (state) => ({
    // isLoading: state.login.isLoading,
    // isLoggedIn: state.login.isLoggedIn,
    initialProductList: state.product.initialProductList,
    cart: state.product.cart,
    total: state.product.total,
    isError: state.register.isError,
    registerMessage: state.register.registerMessage
});
const mapDispatchToProps = (dispatch) => ({
    productFetch: () => dispatch(productFetch()),
    addToCart: (data) => dispatch(productAddToCart(data)),
    remove: (item) => dispatch(removeFromCart(item)),
    register: (data) => dispatch(register(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(productListContainer);