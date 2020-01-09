import React from 'react';
import {Collapse,Navbar,Button,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Jumbotron,NavbarText, Table} from 'reactstrap';
import "./home.css"
import { Icon } from 'react-icons-kit'
import {exit} from 'react-icons-kit/icomoon/exit'
import {pencilSquareO} from 'react-icons-kit/fa/pencilSquareO'
import {eye} from 'react-icons-kit/fa/eye'
import {timesRectangle} from 'react-icons-kit/fa/timesRectangle'
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
                        </Nav>
                        <NavbarText className="navItem" href="/">Logout<Icon icon={exit} className="ml-2" /></NavbarText>
                    </Collapse>
                </Navbar>
                <Jumbotron className="ml-4 mr-4">
                    <div style={{display:"flex", flex: 1, justifyContent: "space-between", alignItems: "center"}}>
                        <p className="lead font">Packages List</p>
                        <Button className="addPackageButton" color="primary" size="sm" >Add New Package</Button>
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
            </div>
         );
    }
}
 
export default homeView;