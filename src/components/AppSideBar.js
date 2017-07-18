import React, { Component } from 'react';
import { Col, Image, FormGroup, Button } from 'react-bootstrap';
import { FormControl, Form, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions';

class AppSideBar extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
    }

    handleOnClick(e){
        this.props.actions.productSort(e.target.name)
    }

    handleChangePrice(e){
        if (e.target.name == 'from') {
            this.props.actions.productSortPriceFrom(e.target.value)
        } else {
            this.props.actions.productSortPriceTo(e.target.value)
        }
    }

    render() {
        return (
            <Col lg={2} className='sideBar'>
                <h3>Категории</h3>
                <FormGroup >
                    <Button type='button' name='phone' onClick={this.handleOnClick} block>Телефоны</Button>
                    <Button type='button' name='laptop' onClick={this.handleOnClick} block>Ноутбуки</Button>
                    <Button type='button' onClick={()=>this.props.actions.defaultState()} block>Сброс</Button>
                </FormGroup>
                <FormGroup >
                    <ControlLabel>По цене</ControlLabel>
                    <FormControl className='input-price'
                        name="from"
                        type="text"
                        placeholder="От"
                        onChange={this.handleChangePrice}
                    />
                    <FormControl className='input-price'
                        name="until"
                        type="text"
                        placeholder="До"
                        onChange={this.handleChangePrice}
                    />
                </FormGroup>
            </ Col>
        )
    }
}

function mapStateToProps (state) {
    return {
        products: state.products.productsById
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSideBar);
