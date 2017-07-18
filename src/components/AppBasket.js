import React, { Component } from 'react';
import { Button, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as Actions from './../actions'

class AppBasket extends Component {
    constructor(props) {
        super(props);
        }

    handlerDelete(name){
        this.props.actions.deleteFromBasket(name)
    }


    render() {
        return (
            <Col className='basket-item' lg={12}>
                <Col lg={3}>
                    <Image src={`${this.props.itemBasket.image}`} responsive />
                </Col>
                <Col lg={5}>
                    <p>{this.props.itemBasket.name}</p>
                </Col>
                <Col lg={1}>
                    <p>x {this.props.itemBasket.count}</p>
                </Col>
                <Button onClick={() => this.handlerDelete(this.props.itemBasket.name)}>
                    -
                </Button>
                <Button onClick={() => this.props.actions.addToBasket(this.props.itemBasket.name)}>
                    +
                </Button>
                <Col lg={2}>
                    <p>{this.props.itemBasket.price} BYR</p>
                </Col>
            </Col>
        );
    }
}

function mapStateToProps (state) {
    return {
        basket: state.products.basket
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBasket);
