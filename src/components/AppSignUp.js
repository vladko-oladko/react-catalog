import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import valid from '../constants/valid';
import * as Actions from './../actions/auth';

class AppSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            confirmPass: '',
            emailValid: valid.default,
            passValid: valid.default,
            confirmPassValid: valid.default,
            error: {},
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit(e) {
        if (this.validate()) {
            this.props.actions.signUp({
                email: this.state.email,
                password: this.state.pass,
            });
        }
    }

    validate() {
        let err = {
            error: {}
        };
        let check = true;

        if (!this.state.email || !this.state.pass || !this.state.confirmPass) {
            err.error = 'Заполните поля';
            err.nameValid = valid.warning;
            err.emailValid = valid.warning;
            err.passValid = valid.warning;
            err.confirmPassValid = valid.warning;
            check = false;
        }

        if (this.state.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
            err.error = 'Пожалйста, введите правильный Email\n';
            err.emailValid = valid.error;
            check = false;
        }

        if (this.state.pass && this.state.pass.length < 6) {
            err.error = 'Минимум 6 символов\n';
            err.passValid = valid.error;
            check = false;
        }

        if (this.state.pass !== this.state.confirmPass && this.state.passValid !== valid.error) {
            err.error = 'Пароли не сопадают';
            err.confirmPassValid = valid.error;
            check = false;
        }

        this.setState(err);

        return check;
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col smOffset={4} sm={4} xsOffset={2} xs={8} className="user_form">
                        <Form onChange={this.handleChange}>
                            <FormGroup controlId="signupHeader">
                                <Col sm={12} className="text-center">
                                    <h2>Регистрация</h2>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="email" validationState={this.state.emailValid}>
                                <FormControl type="email" placeholder="E-mail" />
                            </FormGroup>
                            <FormGroup controlId="pass" validationState={this.state.passValid}>
                                <FormControl type="password" placeholder="Пароль" />
                            </FormGroup>
                            <FormGroup controlId="confirmPass" validationState={this.state.confirmPassValid}>
                                <FormControl type="password" placeholder="Подтвердите пароль"/>
                            </FormGroup>
                            <FormGroup controlId="signupError">
                                <Col sm={12} className="text-center">
                                    <p>{ (Object.values(this.state.error)) && this.props.serverError } </p>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="submit">
                                <Col xs={12}>
                                    <Button onClick={this.handleSubmit} className="center-block">Отправить</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps (state) {
    return {
        serverError: state.auth.error.signup
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSignUp);
