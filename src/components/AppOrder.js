import React, { Component } from 'react';
import { Col, Row, Grid, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import AppBasket from './AppBasket';
import {Link, Redirect} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/orders';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class AppOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            surname: '',
            address: '',
            number: '',
            email:'',
            basket: this.props.basket,
            redirectToReferrer: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        if (!this.state.firstname.match(/^[a-zA-Zа-яёА-ЯЁ\s\-]+$/)) {
            alert('Имя введено не корректно')
        }
        if (!this.state.surname.match(/^[a-zA-Zа-яёА-ЯЁ\s\-]+$/)) {
            alert('Фамилия введена не корректно')
        }
        if (this.state.address.length < 5 || this.state.address.length > 35) {
            alert('Адрес введен не корректно')
        }
        if (!this.state.number.match(/[0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/)) {
            alert('Телефон введен не корректно')
        }
        if (!this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            alert('Email введен не корректно')
        }
        else {
            let order = {
                firstname: this.state.firstname,
                surname: this.state.surname,
                address: this.state.address,
                number: this.state.number,
                email:this.state.email,
                basket: this.props.basket.map(item => {
                    return ([item.name, item.count])
                }),
            }
            console.log(order)
            this.props.actions.addOrder(order)
            alert('Спасибо за заказ! Деньги мы у вас возьмем, но товар конечно не привезем. А пока идите еще чонить закажите ')
            this.setState({redirectToReferrer: true})
        }
    }

    handleOnChange(name, value){
        this.setState({[name]: value})
    }

    render() {
        if (this.state.redirectToReferrer) {
            return (
                <Redirect to='/'/>
            )
        }
        if (this.props.basket[0]){
            return (
                <Grid fluid>
                    <Row>
                        <Col lg={8} lgOffset={2}>
                            <form  onSubmit={this.handleSubmit}>
                                <FieldGroup
                                type="text"
                                label="Имя"
                                placeholder="Введите имя"
                                onChange={(event) => this.handleOnChange('firstname', event.target.value)}
                                />
                                <FieldGroup
                                type="text"
                                label="Фамилия"
                                placeholder="Введите фамилию"
                                onChange={(event) => this.handleOnChange('surname', event.target.value)}
                                />
                                <FieldGroup
                                type="text"
                                label="Адрес"
                                placeholder="Введите адрес"
                                onChange={(event) => this.handleOnChange('address', event.target.value)}
                                />
                                <FieldGroup
                                type="text"
                                label="Телефон"
                                placeholder="В формате (050) 121-34-57"
                                onChange={(event) => this.handleOnChange('number', event.target.value)}
                                />
                                <FieldGroup
                                type="email"
                                label="Email адрес"
                                placeholder="Введите email"
                                onChange={(event) => this.handleOnChange('email', event.target.value)}
                                />
                                <FormGroup>
                                    <ControlLabel>Дополнительная информация</ControlLabel>
                                    <FormControl componentClass="textarea" placeholder="Еще пастенор захватите"  />
                                </FormGroup>
                                <Button type="submit">
                                    Заказать
                                </Button>
                            </form>
                        </Col>
                        <Col className='basket-item' lg={8} lgOffset={2}>
                            <p>Итого: {this.props.totalPrice} BYR</p>
                        </Col>
                        <Col lg={8} lgOffset={2}>
                            {this.props.basket.map((item, index) => (
                                <AppBasket
                                    key={index}
                                    itemBasket={item}
                                />
                            ))}
                        </Col>
                    </Row>
                </Grid>
            )
        } else {
            return(
                <p> У вас пустая корзина, вернитесь в <Link to='/'>главную</Link></p>
            )
        }
    }
}

function mapStateToProps (state) {
    return {
        basket: state.products.basket,
        totalPrice: state.products.totalPrice,
        orders: state.orders.orders
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppOrder);
