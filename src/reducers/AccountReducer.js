import * as actions from '../constants/Actions';

export const initialState = {
    isLogin: false,
    errorInfo: '',
    role: '',
    name: '',
    image: '',
    token: '',

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
                }
            } catch (err) {
                st.errorInfo = 'Lỗi kết nối, vui lòng thử lại!';
            };

            return st;
        }
        case actions.LOGIN_FACEBOOK: {
            console.log("111111111111111111111");
            console.log(action.data);

            try {
                status = action.data.res.data.status;

                if (status === 501) {
                    st.errorInfo = 'Sai thông tin đăng nhập!';
                } else {
                    st.errorInfo = '';
                    st.isLogin = true;
                    st.role = action.data.data.role;
                    st.name = action.data.user.name;
                    st.image = action.data.user.image;
                    st.token = action.data.data.token;
                }
            } catch (err) {
                st.errorInfo = 'Lỗi kết nối, vui lòng thử lại!';
            };

            return st;
        }
        case actions.LOGIN_GOOGLE: {
            console.log("2222222222222222222222222");
            console.log(action.data);


            try {
                status = action.data.res.data.status;

                if (status === 501) {
                    st.errorInfo = 'Sai thông tin đăng nhập!';
                } else {
                    st.errorInfo = '';
                    st.isLogin = true;
                    st.role = action.data.res.role;
                    st.name = action.data.user.name;
                    st.image = action.data.user.image;
                    st.token = action.data.data.token;
                }
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