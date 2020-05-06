import React from 'react';
import {Collapse,Navbar, NavLink, InputGroup,Container, Col, Row, InputGroupAddon,Button,Form,Card,CardImg, CardText, CardTitle, CardSubtitle, CardBody, FormGroup,NavbarToggler,CustomInput,NavbarBrand,Nav,Label, Input,Jumbotron,NavbarText, Table} from 'reactstrap';
import "./inputButton.scss"
import { Icon } from 'react-icons-kit'
import {plus} from 'react-icons-kit/icomoon/plus'
import {minus} from 'react-icons-kit/icomoon/minus'
class inputButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0
        }
    }
    increment = () => {
        let { amount } = this.state
        let { onChangeValue, uniqueID } = this.props
        this.setState({
            amount: Number(amount) + Number(1)
        },() => onChangeValue({amount: this.state.amount, uniqueID: uniqueID})
        )
    }
    decrement = () => {
        let { amount } = this.state
        let { onChangeValue, uniqueID } = this.props

        if(amount > 0) {
            this.setState({
                amount: Number(amount) - Number(1)
            },() => onChangeValue({amount: this.state.amount, uniqueID: uniqueID})
            )
        }        
    }
    onChange = (e) => {
        let { onChangeValue, uniqueID } = this.props
        this.setState({
            amount: e.target.value
        },() => onChangeValue({amount: this.state.amount, uniqueID: uniqueID})
        )
    }
    render() {
        return ( 
            <div className="upDownMain" style={{paddingBottom: 7}}>
                <Button color="link" style={{marginLeft: 5, marginRight: 5}} onClick={this.decrement} className="loginButton"><Icon size={8} icon={minus}/></Button>
                    <Input type="text" onChange={this.onChange} style={{boxSizing: "border-box", textAlign: "center", borderRadius: 30}} placeholder="Qty" value={this.state.amount} />
                <Button color="link" style={{marginLeft: 5, marginRight: 5}} onClick={this.increment} className="loginButton"><Icon size={8} icon={plus}/></Button>
            </div>
         );
    }
}
 
export default inputButton;