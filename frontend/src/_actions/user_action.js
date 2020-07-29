import axios from 'axios'

import {
    REGISTER_USER,
} from './types'

import {USER_SERVER} from '../components/Config'

export function registerUser(data){
    const request = axios.post(`${USER_SERVER}/register`, data)
    .then(response => response.data)

    return {
        type:REGISTER_USER,
        payload : request
    }
}