import * as actions from './../actions/chat';

const socketMiddleware = (() => {
    var socket = null;

    const onOpen = (ws,store,token) => evt => {
        store.dispatch(actions.socketsConnected());
    }

    const onClose = (ws,store) => evt => {
        store.dispatch(actions.socketsDisconnected());
    }

    const onMessage = (ws,store) => evt => {
        var msg = JSON.parse(evt.data);
        store.dispatch(actions.socketsMessageReceiving(msg));
    }

    return store => next => action => {
        switch(action.type) {
            case 'SOCKETS_CONNECT':
                if(socket != null) {
                    socket.close();
                }
                store.dispatch(actions.socketsConnecting());
                socket = new WebSocket("ws://localhost:8080/chat");
                socket.onmessage = onMessage(socket,store);
                socket.onclose = onClose(socket,store);
                socket.onopen = onOpen(socket,store,action.token);
                break;
            case 'SOCKETS_DISCONNECT':
                if(socket != null) {
                    socket.close();
                }
                socket = null;
                store.dispatch(actions.socketsDisconnected());
                break;
            case 'SOCKETS_MESSAGE_SEND':
                socket.send(JSON.stringify(action));
                break;
            default:
                return next(action);
        }
    }
})();

export default socketMiddleware
