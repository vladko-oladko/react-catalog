import React, { Component } from 'react';
import { Col, Image, Row, Grid, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/products';

class AppItemProduct extends Component {
    componentWillMount(){
        this.props.actions.getItemProducts(this.props.match.params.id)
    }
    render() {
        console.log(this.props)
        return (
            <Grid className='item_detail'>
                <Row>
                    <Col xs={4} md={4} lg={4}>
                        <Image src={`/${this.props.itemProduct.image}`} responsive/>
                    </Col>
                    <Col xs={6} md={6} lg={8} className='description_item'>
                        <p>{this.props.itemProduct.name}</p>
                        <p>{this.props.itemProduct.description}</p>
                    </Col>
                    <Table bordered striped className='table-compare' >
                        <tbody>
                            {this.props.descriptions.map((descr, index) => (
                                <tr key={index}>
                                    <th >{this.props.fields[descr]}</th>
                                    <td>{this.props.itemProduct[descr]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table >
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps (state) {
    return {
        products: state.products.productsById,
        descriptions: state.products.descriptions,
        itemProduct: state.products.itemProduct,
        fields: state.products.fields,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppItemProduct);
