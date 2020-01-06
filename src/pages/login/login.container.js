import React from 'react';
import LoginView from "./loginView"
import { connect } from "react-redux";
class loginContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onLogin=()=>{
        this.props.history.push("/home")
    }
    onEmailChange=(arg)=>{
        console.log("Email", arg.target.value);
    }
    onPasswordChange=(arg)=>{
        console.log("Password", arg.target.value);
    }
    render() { 
        console.log("COUNT", this.props.count);
        
        return ( 
            <LoginView onLogin={this.onLogin} onEmailChange={this.onEmailChange} onPasswordChange={this.onPasswordChange} />
         );
    }
}

const mapStateToProps = (state) => ({
    count: state.session.count
  });
export default connect(mapStateToProps)(loginContainer);