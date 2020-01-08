import React from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Jumbotron,NavbarText} from 'reactstrap';
import "./home.css"
import { Icon } from 'react-icons-kit'
import {exit} from 'react-icons-kit/icomoon/exit'
class homeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false
         }
    }
    toggle=()=> {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() { 
        return ( 
            <div>
                <Navbar light expand="md" className="navBarMain">
                    <NavbarBrand href="/" className="navBarLogo">Event Buddy</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                            <NavLink href="/" className="navItem">Packages List</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="navItem" href="/">Add New Package</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText className="navItem" href="/">Logout<Icon icon={exit} className="ml-2" /></NavbarText>
                    </Collapse>
                </Navbar>
                <Jumbotron className="ml-4 mr-4">
                    <p className="lead font">Packages List</p>
                    {/* <hr className="my-2" /> */}
                    <div className="pkgListHeader px-3">
                        <div><p className="pkgListHeaderContent">Package Name</p></div>
                        <div><p className="pkgListHeaderContent">Added Date</p></div>
                        <div><p className="pkgListHeaderContent">Package Price</p></div>
                        <div><p className="pkgListHeaderContent">Package Info</p></div>
                        <div><p className="pkgListHeaderContent">Action</p></div>
                    </div>
                </Jumbotron>
            </div>
         );
    }
}
 
export default homeView;