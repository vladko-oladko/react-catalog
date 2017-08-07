import React, { Component } from 'react';
import {Nav, Navbar, NavItem, FormGroup, FormControl, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/products';
import AppBasket from './AppBasket';

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(e) {
        this.props.actions.inputSearch(e.target.value.toLowerCase())
        if (e.target.value == '') {
            this.props.actions.getListProducts()
        }
    }

    componentDidMount(){
        this.props.actions.getListProducts()
    }

    render() {
        return (
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Главная</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                   <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type='text' placeholder='Поиск' onChange={this.searchHandler}/>
                            </FormGroup>
                        </Navbar.Form>
                        <Nav pullRight >
                            <NavItem className="block">
                                Корзина
                                <Col className='hidden-block'>
                                    {this.props.basket.map((item, index) => (
                                        <AppBasket
                                            key={index}
                                            itemBasket={item}
                                        />
                                    ))}
                                    <Col className='basket-item' lg={8}>
                                        <p>Итого: {this.props.totalPrice} BYR</p>
                                        <Link to='/order'>Оформить заказ</Link>
                                    </Col>
                                </Col>
                            </NavItem>
                            <LinkContainer to="/signup">
                                <NavItem eventKey={1}>Регистрация</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <NavItem eventKey={2}>Войти</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

function mapStateToProps (state) {
    return {
        search: state.products.search,
        basket: state.products.basket,
        totalPrice: state.products.totalPrice
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
