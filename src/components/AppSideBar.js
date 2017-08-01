import React, { Component } from 'react';
import { Col, Image, FormGroup, Button, DropdownButton, MenuItem, Checkbox } from 'react-bootstrap';
import { FormControl, Form, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/categories';
import AppOptions from './AppOptions';

class AppSideBar extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    handleOnClick(name){
        this.props.actions.defaultState()
        this.props.actions.productSort(name)
    }

    isActive(name) {
        return 'btn-' + ((this.props.currentCategory == name) ?'active ':'');
    }

    render() {
        return (
            <Col xs={10} lg={2} className='sideBar'>
                <p>Категории</p>
                <FormGroup >
                    <Button type='button' className={this.isActive('phone')} onClick={() => this.handleOnClick('phone')} block>Телефоны</Button>
                    <Button type='button' className={this.isActive('laptop')} onClick={() => this.handleOnClick('laptop')} block>Ноутбуки</Button>
                    <Button type='button' onClick={() => this.props.actions.defaultState()} block>Сброс</Button>
                </FormGroup>
                <AppOptions/>
            </ Col>
        )
    }
}

function mapStateToProps (state) {
    return {
        products: state.products.productsById,
        currentCategory: state.categories.currentCategory
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSideBar);
