import axios from 'axios';
import * as actions from '../constants/constants';



/* Login type normal */

function OnClickLogin(email,password) {
    const res  = axios.post('',{
        email,
        password
    }).catch(err=>{
        return err;
    });
    return res;
}

export const login = (email,password,res)=>({
    type: actions.LOGIN,
    data:{
        email,
        password,
        res

    }

});

export const loginRequest = (email,password)=>{
    return (dispatch) =>{
        return OnClickLogin(email,password).then(res=>{
            dispatch(login(email,password,res));
        });
    };
};

/* Login type FB */

export const loginFB = (res)=>({
    type: actions.LOGIN_FACEBOOK,
    data:{
        res,
    }
});

/* Login type GG */

export const loginGG = (res)=>({
    type: actions.LOGIN_GOOGLE,
    data:{
        res,
    }
});

/*  Register type normal    */

function OnClickRegister(name,address,email,password,role){
    const res = axios.post('',{
        name,
        address,
        email,
        password,
        role
    }).catch(err=>{
        return err;
    });
    return res;
};

export const register = (name,address,email,password,res)=>({
    type: actions.REGISTER,
    data:{
        name,
        address,
        email,
        password,
        res
    }
});

export const registerRequest = (name,address,email,password)=>{
    return (dispatch)=>{
        return OnClickRegister(name,address,email,password).then(res=>{
            dispatch(register(name,address,email,password,res));
        });
    };
};

/* Register type FB */

/* Register type GG */