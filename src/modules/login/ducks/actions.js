// Actions
import { createAction } from 'redux-actions'
import types from './types'

export default {
  login: createAction(types.LOGIN),
  loginCancel: createAction(types.LOGIN_CLEAR),
  loginFieldChanged: createAction(types.LOGIN_FIELD_CHANGED,
    (k, v) => ({ k, v })
    /*{
      type: LOGIN_FIELD_CHANGED,
      payload: {k: "key", v: "val"}
    }*/
  ),
  loginSuccess: createAction(types.LOGIN_SUCCESS),
  loginFailed: createAction(types.LOGIN_FAILED),
  sessionStart: createAction(types.LOGIN_SESSION_START),
  sessionEnd: createAction(types.LOGIN_SESSION_END),

  clearErrorMsg: createAction(types.CLEAR_ERROR_MSG)
}

 