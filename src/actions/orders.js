import * as type from './../constants/orders'
import axios from 'axios';

export function addOrder(obj){
    console.log('send')
    return (dispatch) => {
        axios.post(`http://localhost:8080/orders`,obj)
            .then((response) => {
                console.log(response)
            })
    }
}
