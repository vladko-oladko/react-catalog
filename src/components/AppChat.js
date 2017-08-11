import React, { Component } from 'react';
import { Button, Col, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as Actions from './../actions/chat'
import AppMessages from './AppMessages'

class AppChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            chat: false
        }
        // this.connectHandler = this.connectHandler.bind(this);
        // this.messageHandler = this.messageHandler.bind(this);
        // this.sendMessageHandler = this.sendMessageHandler.bind(this);
    }

    connectHandler(){
        this.props.actions.socketsConnect()
        if (this.state.chat == false) {
            this.setState({chat: true})
        } else {
            this.setState({chat: false})
        }
    };

    messageHandler(data){
        this.setState({message: data})
    }

    sendMessageHandler(){
        this.props.actions.socketsMessageSend(this.state.message)
    }

    isActive() {
        return ((this.state.chat == true) ?'hidden-block-chat':'hidden-block-chat-none');
    }

    render() {
        if (!this.props.isAuth){
            return null;
        }
        return (
            <div>
                <Button className='block-chat' onClick={() => this.connectHandler()}> Чат </Button>
                <Col className={this.isActive()}>
                    {this.props.message_history.map((item, index) => (
                        <AppMessages
                            key={index}
                            message={item}
                        />
                    ))}
                    <form>
                        <FormControl
                            type="text"
                            placeholder="Текст"
                            onChange={(event) => this.messageHandler(event.target.value)}
                            className='input-chat'
                        />
                        <Button className='btn-chat' type="submit" onClick={() => this.sendMessageHandler()}>
                            Ok
                        </Button>
                    </form>
                </Col>
            </div>
        );
    };
};

function mapStateToProps (state) {
    return {
        connected: state.chat.connected,
        message_history: state.chat.message_history,
        isAuth: state.auth.isAuth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppChat);
