import React from 'react';
import LoginView from "./loginView"
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
        
        return ( 
            <LoginView onLogin={this.onLogin} onEmailChange={this.onEmailChange} onPasswordChange={this.onPasswordChange} />
         );
    }
}
 
export default loginContainer;