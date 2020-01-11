import React, { PureComponent } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class modal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { isModalopen,toggleModal, ModalBodyElemants, ModalHeadElemants, ModalFooterElemants } = this.props
        
        return ( 
            <Modal isOpen={isModalopen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}><ModalHeadElemants /></ModalHeader>
                <ModalBody>
                    <ModalBodyElemants />
                </ModalBody>
                <ModalFooter>
                    <ModalFooterElemants />
                </ModalFooter>
            </Modal>
        );
    }
}
 
export default modal;