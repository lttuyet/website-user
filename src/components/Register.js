/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './App.css';

function Register() {
  return (
    <div>
      <div className="back">
        <button type="button" className="btn btn-outline-info ">
          Trở về trang đăng nhập
        </button>
      </div>
      <div className="my_bd_rg">
        <form className="form-signin">
          <div className="text-center ">
            <h1 className="h3 font-weight-normal separate">Đăng ký</h1>
          </div>
          <div className="form-label-group ">
            <div className="btn-group btn-group-toggle separate"  data-toggle="buttons">
              <label className="btn btn-info active" style={{width: "195px"}}>
                <input type="radio" name="options" id="option1" value="1" checked />Người học
              </label>
              <label className="btn btn-info" style={{width: "195px"}}>
                <input type="radio" name="options" id="option2" value="0" /> Người dạy
              </label>
            </div>
          </div>
          <div className="form-label-group">
            <input
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Tên hiển thị"
              required
              autoFocus
            />
            <label htmlFor="inputName">Tên hiển thị</label>
          </div>
          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Địa chỉ email"
              required
            />
            <label htmlFor="inputEmail">Địa chỉ email</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Mật khẩu"
              required
            />
            <label htmlFor="inputPassword">Mật khẩu</label>
          </div>

          <button className="btn btn-lg btn-info btn-block" type="submit">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
