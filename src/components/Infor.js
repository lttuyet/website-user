/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Menu from './Menu';
import './App.css';

function Infor() {
  return (
    <div>
      <Menu />
      <div className="form-signin myshadow">
        <div className="py-3 text-center">
          <h2>Thông tin cá nhân</h2>
        </div>

        <div className="row">
          <div className="col">
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    defaultValue=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    defaultValue=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="email">Email </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div className="invalid-feedback">
                  Please enter youraddress.
                </div>
              </div>
              <button className="btn btn-info btn-lg btn-block" type="submit">
                Cập nhật
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infor;
