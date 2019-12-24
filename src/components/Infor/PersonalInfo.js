/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import '../App.css';
import '../extra.css';
import '../shard.dashboard.css';
import { callAPIAuth } from '../../utils/apiCaller';

class PersonalInfo extends PureComponent {
    constructor(props) {
        super(props);

        const st = this.props;
        const arrayAddress = st.value.address.split(", ");
        const n = arrayAddress.length;
        let i;
        let address = '';

        for (i = 0; i < n - 3; i += 1) {
            address = `${address}${arrayAddress[i]} `;
        }

        if (i < n - 2) {
            address = `${address}${arrayAddress[i]} `;

        }

        this.state = {
            name: st.value.name,
            address,
            addresses: [
                {
                    province: "Thành phố Hồ Chí Minh",
                    districts: [
                        "Quận 1",
                        "Quận 2",
                        "Quận 3",
                        "Quận 4",
                        "Quận 5",
                        "Quận 6",
                        "Quận 7",
                        "Quận 8",
                        "Quận 9",
                        "Quận 10",
                        "Quận 11",
                        "Quận 12",
                        "Quận Bình Tân",
                        "Quận Bình Thạnh",
                        "Quận Gò Vấp",
                        "Quận Phú Nhuận",
                        "Quận Tân Bình",
                        "Quận Tân Phú",
                        "Quận Thủ Đức",
                        "Huyện Bình Chánh",
                        "Huyện Cần Giờ",
                        "Huyện Củ Chi",
                        "Huyện Hóc Môn",
                        "Huyện Nhà Bè",
                    ]
                }
            ],
            province: arrayAddress[n - 1],
            district: arrayAddress[n - 2]
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleProvinceChange = this.handleProvinceChange.bind(this);
        this.handleDistrictChange = this.handleDistrictChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleAddressChange(e) {
        this.setState({
            address: e.target.value
        });
    }

    handleProvinceChange(e) {
        const st = this.state;
        const address = st.addresses.find(item => item.province === e.target.value);

        this.setState({ province: e.target.value, district: address.districts[0] });
    }

    handleDistrictChange(e) {
        this.setState({ district: e.target.value });
    }

    render() {
        const st = this.props;
        const prs = st.value;
        const { state } = this;

        const listProvince = state.addresses.map((address) => {
            return (
                <option value={address.province}>{address.province}</option>
            );
        });

        const address = state.addresses.find(item => item.province === state.province);
        const listDisTrict = address.districts.map((district) => {
            return (
                <option value={district}>{district}</option>
            );
        });

        return (
            <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                    <h6 className="m-0">Thông tin cá nhân</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item p-3">
                        <div className="row">
                            <div className="col">
                                <form onSubmit={event => {
                                    event.preventDefault();

                                    const addr = `${state.address}, ${state.district}, ${state.province}`;

                                    const data = {
                                        name: state.name,
                                        address: addr
                                    };

                                    // eslint-disable-next-line no-unused-vars
                                    const result = callAPIAuth('updatebasic', 'POST', prs.token, data).then((res) => {
                                        try {
                                            const { status } = res.data;

                                            if (status === "failed") {
                                                st.handleInfo(2, "Thông tin cá nhân của bạn chưa được cập nhật!");
                                            } else {
                                                st.handleInfo(1, 'Thông tin cá nhân của bạn đã được cập nhật!');
                                                st.handleBasicInfo(data.name, data.address);
                                                st.updateName(state.name);
                                            }
                                        } catch (err) {
                                            st.handleInfo(2, "Lỗi kết nối, vui lòng thử lại!");
                                        }
                                    });
                                }}>
                                    <div className="form-group ">
                                        <label htmlFor="feFirstName">Họ và tên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="feFirstName"
                                            placeholder="Họ và tên"
                                            defaultValue={state.name}
                                            onChange={this.handleNameChange}
                                        />
                                    </div>
                                    <div className="form-label-group">
                                        <div className="row ">
                                            <div className="col-6">
                                                <label htmlFor="feInputAddress">Tỉnh/Thành phố</label>
                                                <select className="form-control" onChange={this.handleProvinceChange} defaultValue={state.province}>
                                                    {listProvince}
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="feInputAddress">Quận/Huyện</label>
                                                <select className="form-control" onChange={this.handleDistrictChange} defaultValue={state.district}>
                                                    {listDisTrict}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="feInputAddress">Số nhà, Đường</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="feInputAddress"
                                            placeholder="Địa chỉ"
                                            defaultValue={state.address}
                                            onChange={this.handleAddressChange}
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

export default PersonalInfo;
