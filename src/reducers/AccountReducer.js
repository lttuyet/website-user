import * as actions from '../constants/Actions';

export const initialState = {
    isLogin: false,
<<<<<<< HEAD
    errorInfo: '',
=======
    errorInfo:'',
>>>>>>> 0cb21cf2dd1695e6373e3d4d6b12c543a6f99a89

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
<<<<<<< HEAD
    let status = 0;
=======
    let status=0;
>>>>>>> 0cb21cf2dd1695e6373e3d4d6b12c543a6f99a89

    switch (action.type) {
        case actions.LOGIN: {
            try {
                status = action.data.data.status;
<<<<<<< HEAD

                if (status === 501) {
                    st.errorInfo = 'Sai thông tin đăng nhập!';
                } else {
                    st.errorInfo = '';
                    st.isLogin = true;
                    st.role = action.data.res.role;
                    st.name = action.data.res.name;
                    st.image = action.data.res.image;
                }
            } catch (err) {
                st.errorInfo = 'Lỗi kết nối, vui lòng thử lại!';
            };
=======
      
                if (status === 501) {
                    st.errorInfo='Sai thông tin đăng nhập!';
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
>>>>>>> 0cb21cf2dd1695e6373e3d4d6b12c543a6f99a89

            return st;
        }
        case actions.LOGIN_FACEBOOK: {
            try {
<<<<<<< HEAD
                status = action.data.res.data.status;

                if (status === 501) {
                    st.errorInfo = 'Sai thông tin đăng nhập!';
                } else {
                    st.errorInfo = '';
                    st.isLogin = true;
                    st.role = action.data.res.role;
                    st.name = action.data.user.name;
                    st.image = action.data.user.image;
                }
            } catch (err) {
                st.errorInfo = 'Lỗi kết nối, vui lòng thử lại!';
            };
=======
                console.log(action.data);

                status = action.data.res.data.status;
      
                if (status === 501) {
                    st.errorInfo='Sai thông tin đăng nhập!';
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
>>>>>>> 0cb21cf2dd1695e6373e3d4d6b12c543a6f99a89

            return st;
        }
        case actions.LOGIN_GOOGLE: {
            try {
<<<<<<< HEAD
                status = action.data.res.data.status;

                if (status === 501) {
                    st.errorInfo = 'Sai thông tin đăng nhập!';
                } else {
                    st.errorInfo = '';
                    st.isLogin = true;
                    st.role = action.data.res.role;
                    st.name = action.data.user.name;
                    st.image = action.data.user.image;
                }
            } catch (err) {
                st.errorInfo = 'Lỗi kết nối, vui lòng thử lại!';
            };
=======
                console.log(action.data);

                status = action.data.res.data.status;
      
                if (status === 501) {
                    st.errorInfo='Sai thông tin đăng nhập!';
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
>>>>>>> 0cb21cf2dd1695e6373e3d4d6b12c543a6f99a89

            return st;
        }
        case actions.LOGOUT:
            return initialState;
        default:
            return initialState;
    }
};

export default myReducer;