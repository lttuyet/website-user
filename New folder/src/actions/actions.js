import * as actions from '../constants/Actions';
import { callAPI } from '../utils/apiCaller';

function OnClickLoginFB(user) {
    const res = callAPI('user/login', 'POST', user).catch(err => {
        return err;
    });

    return res;
}

export const loginFB = (res) => ({
    type: actions.LOGIN_FACEBOOK,
    data: res
});

export const loginFBRequest = (user) => {
    return (dispatch) => {
        return OnClickLoginFB(user).then(res => {
            dispatch(loginFB({ res, user }));
        });
    };
};

function OnClickLoginGG(user) {
    const res = callAPI('user/login', 'POST', user).catch(err => {
        return err;
    });

    return res;
}

export const loginGG = (res) => ({
    type: actions.LOGIN_GOOGLE,
    data: res
});

export const loginGGRequest = (user) => {
    return (dispatch) => {
        return OnClickLoginGG(user).then(res => {
            dispatch(loginGG({ res, user }));
        });
    };
};

function OnClickLogin(user) {
    const res = callAPI('user/login', 'POST', user).catch(err => {
        return err;
    });

    return res;
}

export const login = (res) => ({
    type: actions.LOGIN,
    data: res
});

export const loginRequest = (user) => {
    return (dispatch) => {
        return OnClickLogin(user).then(res => {
            dispatch(login(res));
        });
    };
};

export const logout = () => ({
    type: actions.LOGOUT
});