/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../containers/MenuContainer';
import '../App.css';
import Footer from '../layout/Footer';
import { callAPI } from '../../utils/apiCaller';

class ForgetPassword extends PureComponent {
  constructor(props) {
    super(props);

    const prs = this.props;

    this.handleNewPassChange = this.handleNewPassChange.bind(this);

    this.state = {
      id: prs.match.params.id,
      newPass: '',
      error: 0,
      loaded: false,
      email: ''
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
        if (res.data.codeMess === 3) {
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

  handleNewPassChange(e) {
    this.setState({ newPass: e.target.value, error: 0 });
  }

  render() {
    const st = this.props;
    const { state } = this;

    if (st.isLogin) {
      return <Redirect to="/" />;
    }

    if (st.error === "Tài khoản chưa yêu cầu gửi mã xác thực quên mật khẩu người dùng!") {
      return <Redirect to="/email-forget-password" />;
    }

    // Nếu chưa xác thực hoặc 2 tài khoản khác nhau thì cho xác thực lại
    if (!st.isVerified || st.id !== state.id || st.code === '') {
      return <Redirect to={`/verify&id=${st.id}`} />;
    }

    return (
      <div className="container-fluid">
        <Menu />
        {(state.error !== 0) && <div className="mx-auto d-block"><h4>{state.email}</h4><h5>{state.error}</h5></div>}
        {(state.loaded) &&
          <div className="my_bd_rg">
            <form className="form-signin myshadow"
              onSubmit={(e) => {
                e.preventDefault();

                const data = {
                  id: state.id,
                  newPass: state.newPass,
                  code: st.code
                };

                st.recoverPass(data);
              }}
            >
              <div className="text-center mt-md-1">

                <h1 className="h3 font-weight-normal separate">Đổi mật khẩu</h1>
              </div>
              <div className="form-label-group">
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  onChange={this.handleNewPassChange}
                  required
                />
                <label htmlFor="inputPassword">Mật khẩu mới</label>
              </div>
              <div><label className="text-danger">{st.error}</label></div>
              <button className="btn btn-lg btn-info btn-block" type="submit">
                Đổi mật khẩu
              </button>
            </form>
          </div>
        }
        <Footer />
      </div>
    );
  }
}

export default ForgetPassword;
