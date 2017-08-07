import React, { Component } from 'react';
import { Button, Col, Image, Table} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as Actions from './../actions/compare'

class AppCompare extends Component {
    constructor(props) {
        super(props);
    }

    handlerDeleteFromCompare(id){
        this.props.actions.deleteFromCompare(id)
    }

    render() {
        var productsToCompare = this.props.products.filter(product => this.props.compareProducts.indexOf(product._id) != -1)
        return (
            <Table  bordered   className='table-compare' >
                <tbody >
                    <tr>
                        <th></th>
                        {productsToCompare.map((item, index) => (
                            <td key={index}>
                                <Image src={item.image}/>
                                <Button type='button' onClick={() => this.handlerDeleteFromCompare(item._id)}>-</Button>
                            </td>
                        ))}
                    </tr>
                    {this.props.descriptions.map((descr, index) => (
                        <tr key={index}>
                            <th >{this.props.fields[descr]}</th>
                            {productsToCompare.map((item,index) => (
                                <td key={index}>{item[descr]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

function mapStateToProps (state) {
    return {
        compareProducts: state.compare.compareProducts,
        products: state.products.productsById,
        descriptions: state.products.descriptions,
        fields: state.products.fields
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppCompare);
