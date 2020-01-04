import React from 'react';
import "./login.css"
import {
    Card, InputGroup,Button, InputGroupAddon, InputGroupText, Input
  } from 'reactstrap';
class loginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { onLogin, onEmailChange, onPasswordChange } = this.props
        return ( 
            <div className="mainContainer">
                <Card className="shadow">
                    <div style={{padding: 40, display: "flex",flexDirection: "column", alignItems:"center"}}>
                        <h2 className="font">EventBuddy</h2>
                        <Input size="sm" className="input" type="email" placeholder="Email" onChange={onEmailChange} />
                        <Input size="sm" className="input" type="password" placeholder="Password" onChange={onPasswordChange} />
                        <Button className="button" color="primary" size="sm" block onClick={onLogin}>Login</Button>
                    </div>
                </Card>
            </div>
         );
    }
}
 
export default loginView;