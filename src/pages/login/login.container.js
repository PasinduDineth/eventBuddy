import React from 'react';
import LoginView from "./loginView"
import { login } from "../../actions/LoginAction"
import { connect } from "react-redux";
class loginContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: ""
        }
    }
    onLogin=()=>{
        // this.props.history.push("/home")
        const { push } = this.props.history;
        const { login } = this.props
        login({ username: this.state.email, password: this.state.password }, push)
    }
    onEmailChange=(arg)=>{
        this.setState({
            email: arg.target.value
        })
    }
    onPasswordChange=(arg)=>{
        this.setState({
            password: arg.target.value
        })
    }
    render() { 
        return (
            <LoginView onLogin={this.onLogin} onEmailChange={this.onEmailChange} onPasswordChange={this.onPasswordChange} />
         );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.login.isLoading,
    isLoggedIn: state.login.isLoggedIn
  });
const mapDispatchToProps = (dispatch) => ({
    login: (data, push) => dispatch(login(data, push))
})
export default connect(mapStateToProps, mapDispatchToProps)(loginContainer);