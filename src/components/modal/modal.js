import React, { PureComponent } from 'react';
import "./modal.scss"
import { Button, Modal, Alert, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
class modal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() { 
        const { isModalOpen, toggleModal, type, errorMessage, onPressButton } = this.props
        
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
                    <Button style={{backgroundColor: "#F95335", border: 0}} type="submit" onClick={onPressButton}  className="buttonStyle" >{type}</Button>{' '}
                </ModalFooter>
            </Modal>
        );
    }
}
 
export default modal;