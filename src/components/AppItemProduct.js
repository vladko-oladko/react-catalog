import React, { Component } from 'react';
import { Col, Image, Row, Grid, Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class AppItemProduct extends Component {
    render() {
        var product = this.props.products.filter(item => item.id ==(this.props.match.params.id))[0];
        return (
            <Grid className='item_detail'>
                <Row>
                    <Col xs={4} md={4} lg={4}>
                        <Image src={`/${product.image}`} responsive/>
                    </Col>
                    <Col xs={6} md={6} lg={8} className='description_item'>
                        <p>{product.name}</p>
                        <p>{product.description}</p>
                    </Col>
                    <Table bordered striped className='table-compare' >
                        <tbody>
                            {this.props.descriptions.map((descr, index) => (
                                <tr key={index}>
                                    <th >{this.props.fields[descr]}</th>
                                    <td>{product[descr]}</td>
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
        fields: state.products.fields,
    }
}

export default connect(mapStateToProps)(AppItemProduct);
