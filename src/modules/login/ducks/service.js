// Redux-login service
import { createLogic } from 'redux-logic';

import actions from './actions';
import types from './types';
import endPoints from './../../../util/EndPoints';
import * as APIAuth from './../../../util/HTTPClient';
import jwtDecode from 'jwt-decode';

let API = APIAuth.default

export default [
    createLogic({

        type: types.LOGIN, // only apply this logic to this type
        latest: true, // only take latest
        debounce: 1000,  // Wait 1 s before triggering another call

        // your code here, hook into one or more of these execution 
        // phases: validate, transform, and/or process
        process({ MockHTTPClient, getState, action }, dispatch, done) {
            // TODO: Remove
            // Mock response till backend integration
            let HTTPClient
            if (MockHTTPClient) {
                HTTPClient = MockHTTPClient
            } else {
                HTTPClient = API
            }
            HTTPClient.Post(endPoints.LOGIN, action.payload)
                .then(resp => resp.data)
                .then(data => {
                    localStorage.setItem('jwt', data);
                    // var decodedToken = jwtDecode(data);

                    // var user = {
                    //     userName: decodedToken.username,
                    //     roleName: decodedToken.rolename,
                    //     name: decodedToken.name,
                    //     roleID: decodedToken.roleid
                    // }
                    // localStorage.setItem('user', JSON.stringify(data));
                    APIAuth.setAuth(); // Set token for subsequent calls
                    // history.push('/')
                    return data
                })
                .then(data => {
                    dispatch(actions.loginSuccess(data))
                })
                // .then(() => dispatch(sessionActions.sessionStart()))
                .catch(err => {
                    if (err == null || err.response === null || err.response.status === undefined || err.response.status === 500) {
                        dispatch(actions.loginFailed("Something went wrong, please contact your service provider"))
                    }
                    else {
                        dispatch(actions.loginFailed(err.response.data && err.response.data.message || "Something went wrong, please contact your service provider"))
                    }

                })
                .then(() => done()); // call done when finished dispatching
        }
    }),
    createLogic({

        type: types.LOGIN_SESSION_END, // only apply this logic to this type
        latest: true, // only take latest
        debounce: 1000,  // Wait 1 s before triggering another call

        // your code here, hook into one or more of these execution
        // phases: validate, transform, and/or process
        process({ MockHTTPClient, getState, action }, dispatch, done) {

            // TODO: Remove
            // Mock response till backend integration
            // localStorage.removeItem('jwt');
            localStorage.removeItem('user');

            dispatch(actions.loginCancel())
            // Route to root
            window.location = '/'
            done();
            return
            // END of mock response

            let HTTPClient
            if (MockHTTPClient) {
                HTTPClient = MockHTTPClient
            } else {
                HTTPClient = API
            }

            HTTPClient.Post(endPoints.LOGOUT, action.payload)
                .then(resp => resp.data)
                .then(() => {
                    sessionStorage.removeItem('jwt'); // Remove token
                    localStorage.removeItem('user');
                    // Clear logged in status
                    dispatch(actions.loginCancel())
                    // Route to root
                    window.location = '/'
                })
                .catch(err => {
                    // Log error
                    console.log("Error logging out. ", err)
                    // Route to root
                    window.location = '/'
                })
                .then(() => done()); // call done when finished dispatching
        }
    })

]