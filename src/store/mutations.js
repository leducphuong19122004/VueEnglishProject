import {  RECORD_USER_LOGIN } from './mutation-types'

export default {
    [ RECORD_USER_LOGIN ](state, data) {
        state.userID = data.userID;
        state.login = data.status;
    }
}