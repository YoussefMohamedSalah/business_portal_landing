export enum Endpoints {
    // !----- User Endpoints ------
    LOGIN = "auth/login",
    REGISTER = "auth/register",
    TOKEN_REFRESH = "auth/refresh",
    RESET_PASSWORD = 'auth/password/reset',
    CHANGE_PASSWORD = 'auth/password/change',
    SEND_PASSWORD_CODE = 'auth/password/code',
    CREATE_NEW_PASSWORD = 'auth/password/create-password',
}