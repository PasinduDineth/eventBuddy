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
        const { login } = this.props
        login(this.state.email)       
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
        // console.log("COUNT", this.props.count);
        return (
            <LoginView onLogin={this.onLogin} onEmailChange={this.onEmailChange} onPasswordChange={this.onPasswordChange} />
         );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.login.isLoading
  });
const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(login(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(loginContainer);