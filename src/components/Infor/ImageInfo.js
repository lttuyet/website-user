/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import '../App.css';
import '../extra.css';
import '../shard.dashboard.css';
import { callAPIAuth } from '../../utils/apiCaller';

class Infor extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            image: ''
        };
    }

    render() {
        const st = this.props;
        const { state } = this;

        return (
            <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                    <h6 className="m-0">Ảnh đại diện</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item p-3">
                        <div className="row">
                            <div className="col">
                                <form onSubmit={async event => {
                                    event.preventDefault();

                                    try {
                                        const data = new FormData();

                                        data.append('file', state.image);
                                        data.append('upload_preset', 'carovn');

                                        const res = await fetch(
                                            'https://api.cloudinary.com/v1_1/dgfvzem0u/image/upload',
                                            {
                                                method: 'POST',
                                                body: data
                                            }
                                        );

                                        const file = await res.json();
                                        const image = {
                                            image: file.secure_url
                                        };

                                        const result = await callAPIAuth('updateimage', 'POST', st.token, image).then((response) => {
                                            const { status } = response.data;

                                            if (status === "failed") {
                                                st.handleInfo(2, "Ảnh đại diện của bạn chưa được cập nhật!");
                                            } else {
                                                st.handleImage(image.image);
                                                st.updateImage(image.image);
                                                st.handleInfo(1, "Ảnh đại diện của bạn đã được cập nhật!");
                                            }
                                        });
                                    } catch (e) {
                                        st.handleInfo(2, "Lỗi kết nốiiiiiiiiiiii, vui lòng thử lại!");
                                    }
                                }}
                                >
                                    <input
                                        type="file"
                                        name="file"
                                        accept="image/*"
                                        onChange={async e => {
                                            const { files } = e.target;
                                            this.setState({
                                                image: files[0]
                                            });
                                        }} />

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

export default Infor;
