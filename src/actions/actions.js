import * as actions from '../constants/Actions';
import { callAPI, callAPIAuth } from '../utils/apiCaller';

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

function OnClickGetInfo(token) {
    const res = callAPIAuth('me', 'GET', token,{}).catch(err => {
        return err;
    });

    return res;
}

export const getInfo = (res) => ({
    type: actions.GET_INFO,
    data: res
});

export const getInfoRequest = (token) => {
    return (dispatch) => {
        return OnClickGetInfo(token).then(res => {
            dispatch(getInfo(res));
        });
    };
};

export const updateName = (name) => ({
    type: actions.UPDATE_NAME,
    name
});

export const updateImage = (image) => ({
    type: actions.UPDATE_IMAGE,
    image
});

function OnClickVerify(data) {
    const res = callAPI('user/verify', 'POST', data).catch(err => {
        return err;
    });

    return res;
}

export const verify = (res) => ({
    type: actions.VERIFY,
    data: res
});

export const verifyRequest = (data) => {
    return (dispatch) => {
        return OnClickVerify(data).then(res => {
            dispatch(verify({ res, data }));
        });
    };
};

function OnClickRecoverPass(data) {
    const res = callAPI('user/forget-password', 'POST', data).catch(err => {
        return err;
    });

    return res;
}

export const recoverPass = (res) => ({
    type: actions.RECOVER_PASS,
    data: res
});

export const recoverPassRequest = (data) => {
    return (dispatch) => {
        return OnClickRecoverPass(data).then(res => {
            dispatch(recoverPass({ res, data }));
        });
    };
};

// ----------------------------

export const addTag = (tag) =>({
    type: actions.ADD_TAG,
    data: tag
});

export const removetag = (tag) =>({
    type: actions.REMOVE_TAG,
    data: tag
});