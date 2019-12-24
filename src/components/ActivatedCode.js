/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../containers/MenuContainer';
import './App.css';
import Footer from './layout/Footer';
import { callAPI } from '../utils/apiCaller';

class ActivatedCode extends PureComponent {
  constructor(props) {
    super(props);

    const prs = this.props;

    this.handleCodeChange = this.handleCodeChange.bind(this);

    this.state = {
      id: prs.match.params.id,
      code: '',
      error: 0,
      loaded: false,
      email: '',
      errorCommit: ''
    };
  }

  componentDidMount() {
    const st = this.state;

    this.checkStatusAccount(st.id);
  }

  checkStatusAccount = async id => {
    try {
      const res = await callAPI('user/checkstatus', 'POST', { id });

      if (res.data.status === 'failed') {
        this.setState({
          error: res.data.message
        });
      }

      if (res.data.status === 'success') {
        if (res.data.codeMess === 4) {
          this.setState({
            error: 0,
            loaded: true
          });
        } else {
          this.setState({
            error: res.data.message,
            email: res.data.email,
          });
        }
      }
    } catch (e) {
      this.setState({
        error: "Lỗi kết nối! Vui lòng tải lại trang!"
      });
    }
  };

  handleCodeChange(e) {
    this.setState({ code: e.target.value, error: '' });
  }

  render() {
    const st = this.props;
    const { state } = this;

    if (st.isLogin) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container-fluid">
        <Menu />
        {(state.error !== 0) && <div className="mx-auto d-block"><h4>{state.email}</h4><h5>{state.error}</h5></div>}
        {(state.loaded) &&
          <div className="my_bd_rg ">
            <form className="form-signin myshadow"
              onSubmit={(e) => {
                e.preventDefault();
                const data = {
                  id: this.state.id,
                  code: this.state.code
                };

                const res = callAPI('user/activatedcode', 'POST', data).then((r) => {
                  try {
                    const { status } = r.data;

                    if (status === "failed") {
                      this.setState({ errorCommit: r.data.message });
                    } else {
                      this.setState({ errorCommit: '' });
                      window.location = '/login';
                    }
                  } catch (err) {
                    this.setState({ errorCommit: 'Lỗi kết nối, vui lòng thử lại!' });
                  }
                });
              }}>
              <div className="text-center mt-md-1">
                <h1 className="h3 font-weight-normal separate">
                  Kích hoạt tài khoản
              </h1>
              </div>
              <div className=" mb-md-2">
                <label>
                  <span className="text-danger">***</span>
                  Mã xác thực đã được gửi đến địa chỉ email của bạn. Vui lòng nhập
                  mã xác thực để kích hoạt tài khoản.
              </label>
              </div>
              <div className="form-label-group">
                <input
                  type="text"
                  id="inputVerfyCode"
                  className="form-control"
                  required
                  autoFocus
                  onChange={this.handleCodeChange}
                />
                <label htmlFor="inputVerfyCode">Mã kích hoạt</label>
              </div>
              <div>
                <label className="text-danger">{state.errorCommit}</label>
              </div>
              <button className="btn btn-lg btn-info btn-block" type="submit">
                Xác nhận
            </button>
            </form>
          </div>
        }
        <Footer />
      </div>
    );
  }
}

export default ActivatedCode;
