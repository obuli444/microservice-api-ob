import { environment } from '../../environment/environment';


const KEYCLOAK_ENDPOINTS = Object.freeze({
    HOST: environment.KEYCLOAK_HOST,
    REALM: {
        AUTH: '/auth/realms',
        ADMIN : '/admin/realms'
    },
    SIGNIN : '/protocol/openid-connect/token',
    CHECK_TOCKEN : '/protocol/openid-connect/token/introspect',
    SIGNUP : '',
    SIGNOUT:'/protocol/openid-connect/logout',
    RESET_PASSWORD: '/login-actions/reset-credentials',
    USERS:{
        LIST : '/users',
        SESSION : '/sessions',
        COMMON:'/users'

    }
});

export { KEYCLOAK_ENDPOINTS }