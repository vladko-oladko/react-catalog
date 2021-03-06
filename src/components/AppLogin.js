import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import valid from '../constants/valid';
import * as Actions from './../actions/auth';

class AppLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            emailValid: valid.default,
            passValid: valid.default,
            error: {},
            redirect: false
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
            this.props.actions.logIn({
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

        if (!this.state.email || !this.state.pass) {
            check = false;
            err.error = 'Required fields';
            err.emailValid = valid.warning;
            err.passValid = valid.warning;
        };

        this.setState(err);

        return check;
    }

    render() {
        if (this.props.isAuth){
            return( <Redirect to='/'/> )
        }
        return (
            <Grid>
                <Row>
                    <Col smOffset={4} sm={4} xsOffset={2} xs={8} className="user_form">
                        <Form onChange={this.handleChange}>
                            <FormGroup controlId="loginHeader">
                                <Col sm={12} className="text-center">
                                    <h2>Войти</h2>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="email" validationState={this.state.emailValid}>
                                <FormControl type="email" placeholder="E-mail" />
                            </FormGroup>
                            <FormGroup controlId="pass" validationState={this.state.passValid}>
                                <FormControl type="password" placeholder="Пароль" />
                            </FormGroup>
                            <FormGroup controlId="loginError">
                                <Col sm={12} className="text-center">
                                    <p>{(Object.values(this.state.error)) && this.props.serverError } </p>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="submit">
                                <Col xs={12}>
                                    <Button onClick={this.handleSubmit} className="center-block">Ок</Button>
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
        serverError: state.auth.error.login,
        isAuth: state.auth.isAuth,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLogin);
