import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        return (
            <Col xs={10} md={4} lg={6} className="list_product">
                <Link to={{pathname:`/item/${this.props.id}`}}><h3>{this.props.name}</h3></Link>
                <Link to={{pathname:`/item/${this.props.id}`}}><Image src={this.props.image} responsive /></Link>
                <h3>{this.props.price} BYR</h3>
            </ Col>

        )
    }
}
