import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import { connect } from 'react-redux';

class AppItemProduct extends Component {
    render() {
        var Item = this.props.products.filter(item => item.id ==(this.props.match.params.id));
        Item = Item[0];
        return (
            <div className='item_detail'>
                <Col xs={4} md={4} lg={4} lgOffset={2}>
                    <Image src={`/${Item.image}`} responsive/>
                </Col>
                <Col xs={6} md={6} lg={4} className='description_item'>
                    <p>{Item.name}</p>
                    <p>{Item.description}</p>
                </Col>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        products: state.products.productsById
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppItemProduct);
