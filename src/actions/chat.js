import { getFromStorage } from './../helpers/storage'
import * as constants from './../constants/chat'

export function socketsConnecting() {
    return {type: constants.SOCKETS_CONNECTING};
}
export function socketsConnect() {
    return {type: constants.SOCKETS_CONNECT};
}
export function socketsConnected() {
    return {type: constants.SOCKETS_CONNECTED};
}
export function socketsDisconnect() {
    return {type: constants.SOCKETS_DISCONNECT};
}
export function socketsDisconnected() {
    return {type: constants.SOCKETS_DISCONNECTED};
}
export function socketsMessageSend(sendMessage) {
    return {type: constants.SOCKETS_MESSAGE_SEND, message_send: sendMessage, email: JSON.parse(getFromStorage('user')).email};
}
export function socketsMessageReceiving(receiveMessage) {
    return {type: constants.SOCKETS_MESSAGE_RECEIVING, message_receive: receiveMessage};
}
