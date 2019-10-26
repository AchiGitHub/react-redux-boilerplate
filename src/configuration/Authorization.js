import React from 'react';
import * as roles from './UserRole';
import history from './../_helpers/history'

const Authorization = (allowedRoles) =>
    (WrappedComponent) =>
        (class WithAuthorization extends React.Component {
            constructor(props) {
                super(props)

                const user = localStorage.user && JSON.parse(localStorage.user);
                this.state = {
                    user: {
                        name: (user && user.username),
                        role: (user && user.roleName)
                    }
                }
            }
            render() {
                const { role } = this.state.user
                const { jwt } = localStorage
                if(jwt){
                    if (allowedRoles.includes(role)) { 
                        return <WrappedComponent {...this.props} />
                   } else {
                        return <h1>No page for you!</h1>
                    }
                }
                else{
                    history.push('/')
                    return null
                }
               
            } 
        })

export const IsAuthorized = (page, role) => {

    const rbac = {
        [roles.ADMIN_USER]: ["Home"]
    }

    if (rbac[role] && rbac[role].includes(page)) { 
        return true
   } else {
        return false
    }

}

export default Authorization