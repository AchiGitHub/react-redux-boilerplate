import types from './types'
import { handleActions } from 'redux-actions'

const initialState = {
	username: "",
	hasError: false,
	error: {},
	resp: { status: 0, message: "" }, // Status 1 is success. message: to show a message
	loading: false,
	loggedin: false,

	isAuthenticated: !!localStorage.jwt,
	jwt: localStorage.jwt,
	user: localStorage.user
}

// Reducers from redux-actions
export default handleActions({

	[types.LOGIN_FIELD_CHANGED]: (state, { payload: { k, v } }) => (
		{ ...state, [k]: v }
	),
	[types.LOGIN]: (state, { payload }) => (
		{ ...state, username: "", hasError: false, resp: {}, error: payload, loading: false, loggedin: false }
	),
	[types.LOGIN_FAILED]: (state, { payload }) => (
		{ ...state, username: "", hasError: true, resp: { status: 0 }, error: payload, loading: false }
	),

	[types.LOGIN_SUCCESS]: (state) => (
		{ ...state, username: "", hasError: false, resp: {}, error: null, loading: false, loggedin: true }
	),

	[types.LOGIN_CLEAR]: (state) => (
		{ ...state, username: "", hasError: false, resp: {}, loggedin: false }
	),

	[types.LOGIN_SESSION_START]: (state) => {
		return { ...state, isAuthenticated: !!localStorage.jwt, jwt: localStorage.jwt, user: JSON.parse(localStorage.getItem("user")) }
	},

	[types.LOGIN_SESSION_END]: (state) => (
		{ ...state, isAuthenticated: !!localStorage.jwt, jwt: undefined, user: undefined }
	),

	[types.CLEAR_ERROR_MSG]: (state) => (
		{ ...state, error: null }
	),

}, initialState)
