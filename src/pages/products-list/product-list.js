import React from 'react';
import {PopoverHeader,Navbar, Popover, InputGroup,Container, Col, Row, InputGroupAddon,Button,Form,Card,CardImg, CardText, CardTitle, CardSubtitle, CardBody, FormGroup,NavbarToggler,CustomInput,NavbarBrand,Nav,Label, Input,Jumbotron,NavbarText, Table} from 'reactstrap';
import "./product-list.scss"
import { Icon } from 'react-icons-kit'
import {ic_shopping_cart} from 'react-icons-kit/md/ic_shopping_cart'
import {cancelCircle} from 'react-icons-kit/icomoon/cancelCircle'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import InputButton from "../../components/inputButton/inputButton"
import Data from "../../products.json"
class productList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            isOpen: false
        }
    }
    changeValue = (arg) => {
        const { orders } = this.state
        const selected = orders.find(odr => odr.uniqueID === arg.uniqueID)
        if(selected){
            // already have
            const filtered = orders.filter(odr => odr.uniqueID !== arg.uniqueID)
            const updated = {...selected, ...arg}
            this.setState({
                orders: filtered.concat([updated])
            })
        }
        else {
            // not in state. add to state
            this.setState({
                orders: orders.concat([arg])
            })
        }
    }
    openCart = () => {
        console.log("cart", this.state.orders);
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    addToCart = (e) => {
        console.log(e.target.id)        
        const { orders } = this.state
        const selected = orders.find(odr => odr.uniqueID === e.target.id)
        if(selected && selected.amount !== 0){
            // already have
            const filtered = orders.filter(odr => odr.uniqueID !== e.target.id)
            const updated = {...selected, isAddedToCart: true}
            this.setState({
                orders: filtered.concat([updated])
            })
        }
        else {
            // not in state or amount is 0. Do nothing
        }
    }
    render() {        
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return ( 
            <div className="main">
                <Navbar light expand="md" className="navBarMain">
                    <NavbarBrand href="/" className="navBarLogo ml-4">SIHELA</NavbarBrand>
                    <div className="ml-auto">
                        <Button color="link" className="signUpButton">Sign Up</Button>
                        <Button className="ml-auto mr-4 loginButton">Login</Button>
                        <Icon style={{ color: '#525252' }} onClick={this.toggle} size={30} icon={ic_shopping_cart}/>
                        <span class='badge badge-warning' id='lblCartCount'> 5 </span>
                    </div>
                </Navbar>
                <Jumbotron className="ml-5 mb-4 mt-4 mr-5 mainImageHolder jumbotron effect1">
                </Jumbotron>
                <div className="pl-5 pr-5 searchMain">
                    <InputGroup className="searchComponent">
                        <Input  className="searchInput effect1"
                                placeholder="Search"
                        />
                        <InputGroupAddon addonType="append">
                            <Button className="searchButton effect1">Search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                {/* <div className="mainCarousel">
                    <Slider {...settings}>
                        <div className="cardPadding">
                                <Card className="cardStyle">
                                    <CardImg top className="cardStyle" width="100%" src="https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                    </CardBody>
                                </Card>
                        </div>
                    </Slider>
                </div> */}
                <div className="m-4">
                    <Container fluid className="productsList">
                        <Row>
                            {Data.map((product) =>
                                <Col sm="2" className="mb-4">
                                    <Card className="cardStyle effect1">
                                        <CardImg top width="100%" className="cardStyle" src={product.image} />
                                        <CardBody className="text-center">
                                            <CardSubtitle style={{paddingBottom: 2}} className="productTitle">{product.name}</CardSubtitle>
                                            <CardSubtitle style={{paddingBottom: 5, fontSize: 12}} className="productDescription">Unit: Kg</CardSubtitle>
                                            <CardSubtitle style={{paddingBottom: 7}} className="productDescription">Rs.{product.price}</CardSubtitle>
                                            <InputButton onChangeValue={this.changeValue} uniqueID={product.name}/>
                                            <Button className="addButton" onClick={this.addToCart} id={product.name}>ADD</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </div>
                <Drawer anchor="right" open={this.state.isOpen} onClose={this.toggle}>
                    <div style={{display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between"}}>
                        <div style={{display: "flex",flexDirection: "column", overflowY: "hidden"}}>
                            <div style={{display: "flex", alignItems: "center",justifyContent: "space-between", backgroundColor: "#FAA147"}} className="drawerHead">
                                 <Icon style={{ color: '#fff', margin: 0, padding: 0 }} onClick={this.toggle} size={18} className="pl-2" icon={cancelCircle}/>
                                <CardTitle className="cartTitle pt-2 pb-2" style={{alignSelf: "center", marginBottom: 0}}>YOUR CART</CardTitle>
                                <div></div>
                            </div>
                            <div style={{display: "flex", overflowY: "scroll", scrollbarWidth: "thin", flexDirection: "column"}}>
                                <Card className="cartCard">
                                    <div style={{display: "flex", justifyContent: "space-between"}} className="ml-2 mr-2 mt-2">
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="img-circular"></div>
                                            <div className="ml-2"
                                                 style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <p className="cartProductName">Carrot</p>
                                                <p className="cartProductPrice">Rs.190.00 X 5kg</p>
                                            </div>
                                        </div>
                                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Icon style={{ color: '#FAA147' }} onClick={this.toggle} size={18} className="pr-2" icon={cancelCircle}/>
                                        </div>
                                    </div>
                                </Card>
                                <div className="ml-2 mr-2 mt-2">
                                    <Divider />
                                </div>
                                <Card className="cartCard">
                                    <div style={{display: "flex", justifyContent: "space-between"}} className="ml-2 mr-2 mt-2">
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="img-circular"></div>
                                            <div className="ml-2"
                                                 style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <p className="cartProductName">Carrot</p>
                                                <p className="cartProductPrice">Rs.190.00 X 5kg</p>
                                            </div>
                                        </div>
                                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Icon style={{ color: '#FAA147' }} onClick={this.toggle} size={18} className="pr-2" icon={cancelCircle}/>
                                        </div>
                                    </div>
                                </Card>
                                <div className="ml-2 mr-2 mt-2">
                                    <Divider />
                                </div>
                                <Card className="cartCard">
                                    <div style={{display: "flex", justifyContent: "space-between"}} className="ml-2 mr-2 mt-2">
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="img-circular"></div>
                                            <div className="ml-2"
                                                 style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <p className="cartProductName">Carrot</p>
                                                <p className="cartProductPrice">Rs.190.00 X 5kg</p>
                                            </div>
                                        </div>
                                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Icon style={{ color: '#FAA147' }} onClick={this.toggle} size={18} className="pr-2" icon={cancelCircle}/>
                                        </div>
                                    </div>
                                </Card>
                                <div className="ml-2 mr-2 mt-2">
                                    <Divider />
                                </div>
                                <Card className="cartCard">
                                    <div style={{display: "flex", justifyContent: "space-between"}} className="ml-2 mr-2 mt-2">
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="img-circular"></div>
                                            <div className="ml-2"
                                                 style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <p className="cartProductName">Carrot</p>
                                                <p className="cartProductPrice">Rs.190.00 X 5kg</p>
                                            </div>
                                        </div>
                                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Icon style={{ color: '#FAA147' }} onClick={this.toggle} size={18} className="pr-2" icon={cancelCircle}/>
                                        </div>
                                    </div>
                                </Card>
                                <div className="ml-2 mr-2 mt-2">
                                    <Divider />
                                </div>
                                <Card className="cartCard">
                                    <div style={{display: "flex", justifyContent: "space-between"}} className="ml-2 mr-2 mt-2">
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="img-circular"></div>
                                            <div className="ml-2"
                                                 style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <p className="cartProductName">Carrot</p>
                                                <p className="cartProductPrice">Rs.190.00 X 5kg</p>
                                            </div>
                                        </div>
                                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Icon style={{ color: '#FAA147' }} onClick={this.toggle} size={18} className="pr-2" icon={cancelCircle}/>
                                        </div>
                                    </div>
                                </Card>
                                <div className="ml-2 mr-2 mt-2">
                                    <Divider />
                                </div>
                                <Card className="cartCard">
                                    <div style={{display: "flex", justifyContent: "space-between"}} className="ml-2 mr-2 mt-2">
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="img-circular"></div>
                                            <div className="ml-2"
                                                 style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <p className="cartProductName">Carrot</p>
                                                <p className="cartProductPrice">Rs.190.00 X 5kg</p>
                                            </div>
                                        </div>
                                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Icon style={{ color: '#FAA147' }} onClick={this.toggle} size={18} className="pr-2" icon={cancelCircle}/>
                                        </div>
                                    </div>
                                </Card>
                                <div className="ml-2 mr-2 mt-2">
                                    <Divider />
                                </div>
                                <Card className="cartCard">
                                    <div style={{display: "flex", justifyContent: "space-between"}} className="ml-2 mr-2 mt-2">
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="img-circular"></div>
                                            <div className="ml-2"
                                                 style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <p className="cartProductName">Carrot</p>
                                                <p className="cartProductPrice">Rs.190.00 X 5kg</p>
                                            </div>
                                        </div>
                                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Icon style={{ color: '#FAA147' }} onClick={this.toggle} size={18} className="pr-2" icon={cancelCircle}/>
                                        </div>
                                    </div>
                                </Card>
                                <div className="ml-2 mr-2 mt-2">
                                    <Divider />
                                </div>
                                <Card className="cartCard">
                                    <div style={{display: "flex", justifyContent: "space-between"}} className="ml-2 mr-2 mt-2">
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="img-circular"></div>
                                            <div className="ml-2"
                                                 style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <p className="cartProductName">Carrot</p>
                                                <p className="cartProductPrice">Rs.190.00 X 5kg</p>
                                            </div>
                                        </div>
                                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Icon style={{ color: '#FAA147' }} onClick={this.toggle} size={18} className="pr-2" icon={cancelCircle}/>
                                        </div>
                                    </div>
                                </Card>
                                <div className="ml-2 mr-2 mt-2">
                                    <Divider />
                                </div>
                            </div>
                        </div>
                        <div className="m-2 pb-4">
                            <FormGroup>
                                <Label for="exampleText" className="orderDetails">SPECIAL NOTE</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <Button className="checkoutButton" block>CHECKOUT</Button>
                        </div>
                    </div>
                </Drawer>
            </div>
         );
    }
}
 
export default productList;