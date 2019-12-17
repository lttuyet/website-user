import React, { PureComponent } from 'react';
import UserActions from '../../containers/UserActionsContainers';

class Menu extends PureComponent {
  render() {
    const st = this.props;

    return (
      <nav className="navbar navbar-expand-sm navbar-dark mybg mt-md-2 myshadow ">
        <a className="navbar-brand" href="/">
          <h4 className="text-white mt-md-1">UBER FOR TUTOR</h4>
        </a>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {st.page === "home" ?
              <li className="nav-item active">
                <a className="nav-link text-uppercase" href="/">
                  Trang Chủ <span className="sr-only">(current)</span>
                </a>
              </li> :
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/">
                  Trang Chủ
                </a>
              </li>}
            {st.page === "listtutors" ?
              <li className="nav-item active">
                <a className="nav-link text-uppercase" href="/listtutors">
                  Danh sách gia sư <span className="sr-only">(current)</span>
                </a>
              </li> :
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/listtutors">
                  Danh sách gia sư
                </a>
              </li>
            }


          </ul>
          <form className="form-inline my-2 my-lg-0">
            {st.isLogin && (
              <UserActions />
            )}
            {!st.isLogin && (
              <div>
                <button
                  className="btn btn-outline-light mr-sm-2"
                  type="button"
                  onClick={() => {
                    window.location.href = './register';
                  }}
                >
                  Đăng Ký
                </button>

                <button
                  className="btn btn-outline-light mr-sm-2"
                  type="button"
                  onClick={() => {
                    window.location.href = './login';
                  }}
                >
                  Đăng nhập
                </button>
              </div>
            )}
          </form>
        </div>
      </nav>
    );
  }
}

/*
<div>
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-light my-2 mr-sm-2"
                  type="submit"
                >
                  Tìm Gia Sư
                </button>

                <button
                  className="btn btn-outline-light my-2 mr-sm-2"
                  type="submit"
                >
                  Tìm Công Việc
                </button>
              </div>
*/

export default Menu;
