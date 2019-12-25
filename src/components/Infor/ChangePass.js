/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import '../App.css';
import '../extra.css';
import '../shard.dashboard.css';
import { callAPIAuth } from '../../utils/apiCaller';

class ChangePass extends PureComponent {
    constructor(props) {
        super(props);

        this.handleOldPassChange = this.handleOldPassChange.bind(this);
        this.handleNewPassChange = this.handleNewPassChange.bind(this);

        this.state = {
            oldPass: '',
            newPass: ''
        };
    }

    handleOldPassChange(e) {
        this.setState({
            oldPass: e.target.value
        });
    }

    handleNewPassChange(e) {
        this.setState({
            newPass: e.target.value
        });
    }

    render() {
        const st = this.props;
        const { state } = this;

        return (
            <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                    <h6 className="m-0">Đổi mật khẩu</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item p-3">
                        <div className="row">
                            <div className="col">
                                <form
                                    onSubmit={event => {
                                        event.preventDefault();

                                        const data = {
                                            oldPass: state.oldPass,
                                            newPass: state.newPass
                                        };

                                        // eslint-disable-next-line no-unused-vars
                                        const result = callAPIAuth('changepass', 'POST', st.token, data).then((res) => {
                                            try {
                                                const { status } = res.data;

                                                if (status === "failed") {
                                                    st.handleInfo(2, res.data.message);
                                                } else {
                                                    st.handleInfo(1, res.data.message);
                                                }
                                            } catch (err) {
                                                st.handleInfo(2, "Lỗi kết nối, vui lòng thử lại!");
                                            }
                                        });
                                    }}>
                                    <div className="form-group ">
                                        <label htmlFor="feFirstName">Mật khẩu hiện tại</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="feFirstName"
                                            placeholder="Mật khẩu hiện tại"
                                            onChange={this.handleOldPassChange}
                                            required
                                            value={state.oldPass}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="feInputAddress">Mật khẩu mới</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="feInputAddress"
                                            placeholder="Mật khẩu mới"
                                            onChange={this.handleNewPassChange}
                                            required
                                            value={state.newPass}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-info">
                                        Cập nhật
                                    </button>
                                </form>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ChangePass;