import * as actions from '../constants/Actions';

export const initialState = {
    isLogin: false,
    errorInfo:'',

    email: '',
    password: '',
    name: '',
    address: '',
    role: '',
    token: '',
    image: '',
};

const myReducer = (state = initialState, action) => {
    const st = { ...state };
    let status=0;

    switch (action.type) {
        case actions.LOGIN: {
            try {
                status = action.data.data.status;
      
                if (status === 501) {
                    st.errorInfo='Tài khoản không tồn tại!';
                } else {
                  st.errorInfo='';
                  st.isLogin=true;
                  st.role=action.data.res.role;
                  st.name=action.data.res.name;
                  st.image=action.data.res.image;
                }
              } catch (err) {
                st.errorInfo='Lỗi kết nối, vui lòng thử lại!';
            }; 

            return st;
        }
        case actions.LOGIN_FACEBOOK: {
            try {
                console.log(action.data);

                status = action.data.res.status;
      
                if (status === 501) {
                    st.errorInfo='Tài khoản không tồn tại!';
                } else {
                  st.errorInfo='';
                  st.isLogin=true;
                  st.role=action.data.res.role;
                  st.name=action.data.user.name;
                  st.image=action.data.user.image;
                }
              } catch (err) {
                st.errorInfo='Lỗi kết nối, vui lòng thử lại!';
            }; 

            return st;
        }
        case actions.LOGIN_GOOGLE: {
            try {
                console.log(action.data);

                status = action.data.res.status;
      
                if (status === 501) {
                    st.errorInfo='Tài khoản không tồn tại!';
                } else {
                  st.errorInfo='';
                  st.isLogin=true;
                  st.role=action.data.res.role;
                  st.name=action.data.user.name;
                  st.image=action.data.user.image;
                }
              } catch (err) {
                this.setState({ errorInfo: 'Lỗi kết nối, vui lòng thử lại!' });
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