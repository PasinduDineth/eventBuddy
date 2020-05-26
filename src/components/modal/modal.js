import React, { PureComponent } from 'react';
import "./modal.scss"
import { Button, Modal, Alert, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
class modal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            fullName: "",
            address: "",
            mobile: "",
            confirmPassword: "",
            errorMessage: "",
            isErrorAvailable: false
        }
    }
    componentDidUpdate() {
        const { message, isError } = this.props
        const { errorMessage, isErrorAvailable } = this.state       
        if(message !== errorMessage || isErrorAvailable !== isError) {
            this.setState({
                errorMessage: message,
                isErrorAvailable: isError
            })
        }
    }
    clearFields = () => {
        this.setState({
            email: "",password: "", confirmPassword: "", fullName: "", address: "", mobile: ""
        })
    }
    onClickAction = (e) => {
        const { onPressButton, toggleModal } = this.props
        const { email,password, confirmPassword, fullName, address, mobile, isErrorAvailable } = this.state
        if (e.target.value === "Register") {
            onPressButton({email,password, confirmPassword, fullName, address, mobile, type: e.target.value})
        }
        else {
            onPressButton({email, password, type: e.target.value})
        }
        console.log("rrr", isErrorAvailable);
    }
    render() { 
        const { isModalOpen, toggleModal, type } = this.props
        const { errorMessage, isErrorAvailable } = this.state
        // if(!isErrorAvailable) {
        //     // there is no error. close and reset values
        //     // this.clearFields()
        //     toggleModal()
        // }
        return ( 
            <Modal isOpen={isModalOpen} toggle={toggleModal} style={{border: 0}}>
                <ModalHeader toggle={toggleModal}><Label className="title">{type}</Label></ModalHeader>
                {type === "Login" ?
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail" hidden>Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={e => this.setState({ email: e.target.value })}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword" hidden>Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={e => this.setState({ password: e.target.value })}/>
                            </FormGroup>
                        </Form>
                        {errorMessage !== "" ?
                            <Alert className="alert">
                                {errorMessage}
                            </Alert>
                            : null
                        }
                    </ModalBody> :
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label hidden>Full Name</Label>
                                <Input type="text" placeholder="Full Name" onChange={e => this.setState({ fullName: e.target.value })} />
                            </FormGroup>
                            <FormGroup>
                                <Label hidden>Address</Label>
                                <Input type="text" placeholder="Address" onChange={e => this.setState({ address: e.target.value })}/>
                            </FormGroup>
                            <FormGroup>
                                <Label hidden>Mobile Number</Label>
                                <Input type="text" placeholder="Mobile Number" onChange={e => this.setState({ mobile: e.target.value })}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail" hidden>Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={e => this.setState({ email: e.target.value })}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword" hidden>Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={e => this.setState({ password: e.target.value })}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword" hidden>Confirm Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Confirm Password" onChange={e => this.setState({ confirmPassword: e.target.value })}/>
                            </FormGroup>
                        </Form>
                        {errorMessage !== "" ?
                            <Alert className="alert">
                                {errorMessage}
                            </Alert>
                            : null
                        }
                    </ModalBody>
                }
                <ModalFooter>
                    <Button style={{backgroundColor: "#F95335", border: 0}} type="submit" onClick={this.onClickAction}  className="buttonStyle" value={type} >{type}</Button>{' '}
                </ModalFooter>
            </Modal>
        );
    }
}
 
export default modal;