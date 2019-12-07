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
<<<<<<< HEAD
    data: res
=======
    data:res
>>>>>>> 0cb21cf2dd1695e6373e3d4d6b12c543a6f99a89
});

export const loginFBRequest = (user) => {
    return (dispatch) => {
        return OnClickLoginFB(user).then(res => {
<<<<<<< HEAD
            dispatch(loginFB({ res, user }));
=======
            dispatch(loginFB({res,user}));
>>>>>>> 0cb21cf2dd1695e6373e3d4d6b12c543a6f99a89
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
<<<<<<< HEAD
    data: res
=======
    data:res
>>>>>>> 0cb21cf2dd1695e6373e3d4d6b12c543a6f99a89
});

export const loginGGRequest = (user) => {
    return (dispatch) => {
        return OnClickLoginGG(user).then(res => {
<<<<<<< HEAD
            dispatch(loginGG({ res, user }));
=======
            dispatch(loginGG({res,user}));
>>>>>>> 0cb21cf2dd1695e6373e3d4d6b12c543a6f99a89
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