import * as actions from '../constants/Actions';

export const initialState = {
    isLogin: false,
    errorInfo: '',
    role: '',
    name: '',
    image: '',
    token: '',
    type: '',

    email: '',
    password: '',
    address: '',
};

const myReducer = (state = initialState, action) => {
    const st = { ...state };
    let status = 0;

    switch (action.type) {
        case actions.LOGIN: {
            try {
                status = action.data.data.status;

                if (status === 501) {
                    st.errorInfo = 'Sai thông tin đăng nhập!';
                } else {
                    st.errorInfo = '';
                    st.isLogin = true;
                    st.role = action.data.data.data.role;
                    st.name = action.data.data.data.name;
                    st.image = action.data.data.data.image;
                    st.token = action.data.data.token;
                    st.type = 'normal';
                }
            } catch (err) {
                st.errorInfo = 'Lỗi kết nối, vui lòng thử lại!';
            };

            return st;
        }
        case actions.LOGIN_FACEBOOK: {
            try {
                status = action.data.res.data.status;

                if (status === 501) {
                    st.errorInfo = 'Sai thông tin đăng nhập!';
                } else {
                    st.errorInfo = '';
                    st.isLogin = true;
                    st.role = action.data.res.data.role;
                    st.name = action.data.user.name;
                    st.image = action.data.user.image;
                    st.token = action.data.res.data.token;
                    st.type = 'facebook';
                }
            } catch (err) {
                st.errorInfo = 'Lỗi kết nối, vui lòng thử lại!';
            };

            return st;
        }
        case actions.LOGIN_GOOGLE: {
            try {
                status = action.data.res.data.status;

                if (status === 501) {
                    st.errorInfo = 'Sai thông tin đăng nhập!';
                } else {
                    st.errorInfo = '';
                    st.isLogin = true;
                    st.role = action.data.res.data.role;
                    st.name = action.data.user.name;
                    st.image = action.data.user.image;
                    st.token = action.data.res.data.token;
                    st.type = 'google';
                }
            console.log(st);
            } catch (err) {
                st.errorInfo = 'Lỗi kết nối, vui lòng thử lại!';
            };

            return st;
        }
        case actions.LOGOUT:
            return initialState;
        default:
            return initialState;
    }
};

export default myReducer;