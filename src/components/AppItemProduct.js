import React, { Component } from 'react';
import { Col, Image, Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';

class AppItemProduct extends Component {
    render() {
        var Item = this.props.products.filter(item => item.id ==(this.props.match.params.id));
        Item = Item[0];
        return (
            <Grid className='item_detail'>
                <Row>
                    <Col xs={4} md={4} lg={4}>
                        <Image src={`/${Item.image}`} responsive/>
                    </Col>
                    <Col xs={6} md={6} lg={8} className='description_item'>
                        <p>{Item.name}</p>
                        <p>{Item.description}</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps (state) {
    return {
        products: state.products.productsById
    }
}

export default connect(mapStateToProps)(AppItemProduct);
