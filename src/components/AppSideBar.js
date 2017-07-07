import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as Actions from './../actions'

class AppSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnIsDisabled: false
        };
       this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
    }


    onCheckRuleClick(e) {
        this.setState({ btnIsDisabled: !this.state.btnIsDisabled });
        if (!this.state.btnIsDisabled) {
            return this.props.actions.productSort('phone');
        } else {
            return this.props.actions.defaultState();
        }
    }

    render() {
        console.log(this.state)
        return (
            <ul className="vertical-menu">
                <input type='checkbox' defaultChecked={false} onChange={this.onCheckRuleClick}/> Телефоны
                <li onClick={()=>this.props.actions.productSort('phone')}> Телефоны</li>
                <li onClick={()=>this.props.actions.productSort('laptop')}> Ноутбуки</li>
                <li onClick={()=>this.props.actions.defaultState()}> Сброс</li>
            </ul>
        )
    }
}

function mapStateToProps (state) {
    return {
        categories: state.categories.categories,
        products: state.products.productsById
    }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(Actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppSideBar);
