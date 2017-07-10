import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import FormGroup  from 'react-bootstrap/lib/FormGroup';
import FormControl  from 'react-bootstrap/lib/FormControl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as Actions from './../actions'

class AppSideBar extends Component {
    render() {
        return (
            <ul className="vertical-menu">
                <li onClick={()=>this.props.actions.productSort('phone')}> Телефоны</li>
                <li onClick={()=>this.props.actions.productSort('laptop')}> Ноутбуки</li>
                <li onClick={()=>this.props.actions.defaultState()}> Сброс</li>
                <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                </FormGroup>
            </ul>
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
