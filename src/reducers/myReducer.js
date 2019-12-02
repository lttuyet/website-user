import * as constants from '../constants/constants';

export const initialState = {
    email : '',
    password: '',
    name: '',
    address: '',
    role: '',
    token: '',
    image: '',
};

const myReducer = (state = initialState,action) =>{
    switch(action.type){
        case constants.LOGIN :{
          
            const st = {...state};

            st.email = action.data.email;
            st.password = action.data.password;
            // try {
                // st.name = action.data.res.data.name;
                // st.address = action.data.res.data.address;
                // st.role = action.data.res.data.role;
                // st.token = action.data.res.data.token;
                // st.image = action.data.res.data.image;
            // }catch(err){
              //  st.token = "err" ;
            // }

            return st;
        }
        case constants.LOGIN_FACEBOOK:{
            const st = {...state};

            st.name = action.data.res.data.name;
            st.token = action.data.res.data.accessToken;
            st.image = action.data.res.picture.data.url;
            
            // Code đại, chưa test

            st.role = action.data.res.data.role;
            return st;
        }
        case constants.LOGIN_GOOGLE:{
            const st = {...state};

            st.name = action.data.res.w3.ig;
            st.image = action.data.res.w3.Paa;
            st.token = action.data.res.Zi.access_token;

            st.role = action.data.res.data.role;

            return st;
        }
        default:
            return state;
    }
};

export default myReducer;