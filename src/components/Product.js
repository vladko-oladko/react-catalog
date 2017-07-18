import React, { Component } from 'react';
import { Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Actions from './../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Product extends Component {
    constructor(props) {
        super(props);
        this.handlerAddToBasket = this.handlerAddToBasket.bind(this);
    }
    handlerAddToBasket(name){
        this.props.actions.addToBasket(name);
    }

    render() {
        var description = this.props.product.description.substr(0,150) + '...'
        if (this.props.display == 'tile') {
            return (
                <Col xs={10} md={4} lg={3} className="tile_product">
                    <Link to={{pathname:`/item/${this.props.product.id}`}}><h3>{this.props.product.name}</h3></Link>
                    <Link to={{pathname:`/item/${this.props.product.id}`}}><Image src={this.props.product.image} responsive /></Link>
                    <h3>{this.props.product.price} BYR</h3>
                    <Col xs={10} md={4} lg={4} >
                        <Button type='button' onClick={() => this.handlerAddToBasket(this.props.product.name)}>Купить</Button>
                    </Col>
                </ Col>
            )
        } else {
            return (
                <Col xs={10} md={4} lg={10} lgOffset={1} className="line_product" >
                    <Col xs={10} md={4} lg={3} >
                        <Link to={{pathname:`/item/${this.props.product.id}`}}><Image src={this.props.product.image} responsive /></Link>
                    </Col>
                    <Col xs={10} md={4} lg={6} >
                       <Link to={{pathname:`/item/${this.props.product.id}`}}><h3>{this.props.product.name}</h3></Link>
                       <h3>{description}</h3>
                    </Col>
                    <Col xs={10} md={4} lg={2} lgOffset={1}>
                        <h3>{this.props.product.price} BYR</h3>
                        <Button type='button' onClick={() => this.handlerAddToBasket(this.props.product.name)}>Купить</Button>
                    </Col>
                </ Col>
            )
        }
    }
}

function mapStateToProps (state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
