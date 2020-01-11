import React from 'react';
import {Collapse,Navbar,Button,Form,Card, FormGroup,NavbarToggler,CustomInput,NavbarBrand,Nav,Label, Input,Jumbotron,NavbarText, Table} from 'reactstrap';
import "./home.css"
import { Icon } from 'react-icons-kit'
import {exit} from 'react-icons-kit/icomoon/exit'
import {pencilSquareO} from 'react-icons-kit/fa/pencilSquareO'
import {eye} from 'react-icons-kit/fa/eye'
import {timesRectangle} from 'react-icons-kit/fa/timesRectangle'
import  Modal  from "../../components/modal/modal"
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
class homeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
            isModalopen: false,
            dateValue:"",
            imagePreviewValue: ""
            }
    }
    toggle=()=> {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    toggleModal=()=> {
        this.setState({
            isModalopen: !this.state.isModalopen
        })
    }
    onApply=(event, picker)=>{
        var momentObj = moment(picker.startDate)
        this.setState({
            dateValue: momentObj.format('YYYY-MM-DD')
        })
    }
    onImagePickerChange=(arg)=> {
        this.setState({
            imagePreviewValue: URL.createObjectURL(arg.target.files[0])
        })        
    }
    generateImageUploadComponent() {
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <img src={this.state.imagePreviewValue ? this.state.imagePreviewValue : "https://www.wesaturate.com/public/images/upload-placeholder.svg"}  style={{width: 150, objectFit: "cover", borderRadius: 5}} />
                    <label class="btnBrowse">
                    Browse <input type="file" style={{display: "none"}} onChange={this.onImagePickerChange} size="sm" />
                    </label>
            </div>
        )
    }
    generateModalHead=(modalType) => ()=> {               
        switch(modalType) {
            case "ADD":
                return (
                    <span className="fontTableData">Add Package</span>
                )
            break;
            case "VIEW":
                return (
                    <span>View Package</span>
                )
            break;
            case "EDIT":
                return (
                    <span>Edit Package</span>
                )
            break;
              case "REMOVE":
                return (
                    <span>Remove Package</span>
                )
              break;
            default:
                return (
                    <span>Add Package</span>
                )
          }

    }
    generateModalFoot=(modalType) => ()=> {
        return (
            <div>
                <Button className="addPackageButton" color="primary" size="sm" >Save Package</Button>
            </div>
        )
    }
    generateModalBody=(modalType) => ()=> {
        switch(modalType) {
            case "ADD":
                return (
                    <Form>
                        <FormGroup>
                            <Label className="fontTableData">Package Name</Label>
                            <Input type="text" size="sm"/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="fontTableData">Package Unique Code</Label>
                            <Input type="text" size="sm"/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="fontTableData">Package Price</Label>
                            <Input type="text" size="sm"/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="fontTableData">Package Expire Date</Label>
                            <div>
                            <DateRangePicker onApply={this.onApply} containerStyles={{display: "flex"}} singleDatePicker>
                            <Input type="type" size="sm" value={this.state.dateValue}/>
                            </DateRangePicker>
                            </div>
                        </FormGroup>
                        <FormGroup>
                                <Label className="fontTableData">Package Status</Label>
                                <CustomInput type="switch" size="sm" id="exampleCustomSwitch" className="fontTableHead" label="Active" />
                        </FormGroup>
                        <FormGroup>
                            <hr/>
                            <Label for="exampleFile" className="fontTableData">Select Images to Upload</Label>
                            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding:15}}>
                                {Array.apply(null, { length: 4 }).map((e, i) => 
                                { return (
                                    <div style={{display: "inline-block", margin: 10}}>
                                        {this.generateImageUploadComponent()}
                                    </div>
                                    )}
                            )}
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label className="fontTableData">Package Description</Label>
                            <Input type="textarea" size="sm"/>
                        </FormGroup>
                    </Form>
                )
            break;
            case "VIEW":
                return (
                    <span>View Package</span>
                )
            break;
            case "EDIT":
                return (
                    <span>Edit Package</span>
                )
            break;
              case "REMOVE":
                return (
                    <span>Remove Package</span>
                )
              break;
            default:
                return (
                    <span>Add Package</span>
                )
          }
    }
    render() { 
        return ( 
            <div>
                <Navbar light expand="md" className="navBarMain">
                    <NavbarBrand href="/" className="navBarLogo">Event Buddy</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                        </Nav>
                        <NavbarText className="navItem" href="/">Logout<Icon icon={exit} className="ml-2" /></NavbarText>
                    </Collapse>
                </Navbar>
                <Jumbotron className="ml-4 mr-4">
                    <div style={{display:"flex", flex: 1, justifyContent: "space-between", alignItems: "center"}}>
                        <p className="lead font">Packages List</p>
                        <Button className="addPackageButton" onClick={this.toggleModal} color="primary" size="sm" >Add New Package</Button>
                    </div>
                    <Table >
                        <thead>
                            <tr>
                            <th className="fontTableHead">Package Name</th>
                            <th className="fontTableHead">Unique Code</th>
                            <th className="fontTableHead">Price</th>
                            <th className="fontTableHead">Added date</th>
                            <th className="fontTableHead">Status</th>
                            <th className="fontTableHead"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="fontTableData">Banquet Menu - Gold</td>
                            <td className="fontTableData">banq01</td>
                            <td className="fontTableData">2019-03-11</td>
                            <td className="fontTableData">Active</td>
                            <td><div><Icon icon={pencilSquareO} /><Icon icon={eye} className="ml-2" /><Icon icon={timesRectangle} className="ml-2" /></div></td>
                            </tr>
                        </tbody>
                    </Table>
                </Jumbotron>
                <Modal isModalopen={this.state.isModalopen} toggleModal={this.toggleModal} ModalBodyElemants={this.generateModalBody("ADD")}  ModalHeadElemants={this.generateModalHead("ADD")} ModalFooterElemants={this.generateModalFoot("ADD")}/>
            </div>
         );
    }
}
 
export default homeView;