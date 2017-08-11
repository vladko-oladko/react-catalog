import * as types from './../constants/chat';

const initialState = {
    connected: false,
    message_history: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SOCKETS_CONNECTING:
      return {
        ...state,
        connected: false,
      };
    case types.SOCKETS_CONNECTED:
      return {
        ...state,
        connected: true
      };
    case types.SOCKETS_DISCONNECTING:
      return {
        ...state,
        connected: true
      };
    case types.SOCKETS_DISCONNECTED:
      return {
        ...state,
        connected: false
      };
    case types.SOCKETS_MESSAGE_RECEIVING:
      return {
        ...state,
        connected: true,
        message_history: [
          ...state.message_history,
          action.message_receive
        ]
      };
    default:
      return state;
  }
}
