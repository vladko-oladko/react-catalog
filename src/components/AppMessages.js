import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class AppMessages extends Component {
    render() {
        return (
            <Col lg={12} className='message'>
                <Col lg={12}>
                    <p>{this.props.message.email}</p>
                </Col>
                    <p>{this.props.message.message_send}</p>
            </Col>
        )
    }
}
