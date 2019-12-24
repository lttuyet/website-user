import * as actions from '../constants/Actions';

export const initialState = {
  isVerified: false,
  error: '',
  id: '',
  code: ''
};

const VerifyReducer = (state = initialState, action) => {
  let st = { ...state };

  switch (action.type) {
    case actions.VERIFY: {
      try {
        if (action.data.res.data.status === 'success') {
          st.isVerified = true;
          st.error = '';
          st.id = action.data.data.id;
          st.code = action.data.data.code;
        } else {
          st.error = action.data.res.data.message;
        }
      } catch{
        st.error = "Kết nối lỗi! Vui lòng thử lại!";
      }

      return st;
    }
    case actions.RECOVER_PASS: {
      try {
        if (action.data.res.data.status === 'success') {
          st = initialState;
        } else {
          st.error = action.data.res.data.message;

          if (st.error === "Sai mã xác thực!") {
            st.isVerified = false;
          }
        }
      } catch{
        st.error = "Kết nối lỗi! Vui lòng thử lại!";
      }

      return st;
    }
    case actions.LOGIN: {
      return initialState;
    }
    default: {
      st.error = "";

      return st;
    }
  }
};

export default VerifyReducer;
