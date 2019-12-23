import * as actions from '../constants/Actions';

export const initialState = {
    isVerified:false,
    error:'',
    id:''
};

const VerifyReducer = (state = initialState, action) => {
    const st = { ...state };

    switch (action.type) {
        case actions.VERIFY:{
            console.log(action.data);

            try{
                if(action.data.res.data.status==='success'){
                    st.isVerified=true;
                    st.error='';
                    st.id=action.data.data.id;
                }else{
                    st.error=action.data.res.data.message;
                }
            }catch{
                st.error="Kết nối lỗi! Vui lòng thử lại!";
            }

            return st;
        }
        default:{
            st.error="";
            return st;
        }
    }
};

export default VerifyReducer;

/*
 onSubmit={(e) => {
                e.preventDefault();
                const data = {
                  id: this.state.id,
                  code: this.state.code
                };

                const res = callAPI('user/verify', 'POST', data).then((r) => {
                  try {
                    const { status } = r.data;

                    if (status === "failed") {
                      this.setState({ errorCommit: r.data.message });
                    } else {
                      this.setState({ errorCommit: '' });
                      window.location = "/login";
                    }
                  } catch (err) {
                    this.setState({ errorCommit: 'Lỗi kết nối, vui lòng thử lại!' });
                  }
                });
              }} */