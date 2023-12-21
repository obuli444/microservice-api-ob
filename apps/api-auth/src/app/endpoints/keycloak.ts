import { environment } from '../../environment/environment';


const KEYCLOAK_ENDPOINTS = Object.freeze({
    HOST: environment.KEYCLOAK_HOST,
    REALM: {
        AUTH: '/auth/realms',
        ADMIN : '/admin/realms'
    },
    SIGNIN : '/protocol/openid-connect/token',
    CHECK_TOCKEN : '/protocol/openid-connect/token/retrospect',
    SIGNUP : '',
    USERS:{
        LIST : '/users',
        SESSION : '/sessions'

    }
});

export { KEYCLOAK_ENDPOINTS }