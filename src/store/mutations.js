import {  RECORD_USER_LOGIN } from './mutation-types'

export default {
    [ RECORD_USER_LOGIN ](state, status) {
        state.login = status;
    }
}