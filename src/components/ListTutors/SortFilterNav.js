/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import '../App.css';
import { callAPI } from '../../utils/apiCaller';

class SortFilterNav extends PureComponent {
    constructor(props) {
        super(props);

        this.handleSortChange = this.handleSortChange.bind(this);
        this.handleProvinceChange = this.handleProvinceChange.bind(this);
        this.handleDistrictChange = this.handleDistrictChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);

        this.state = {
            sort: '1',
            province: 'Tất cả',
            district: 'Tất cả',
            price: '0',
            tag: 'Tất cả',
            addresses: [
                {
                    province: "Tất cả",
                    districts: ["Tất cả"]
                },
                {
                    province: "Thành phố Hồ Chí Minh",
                    districts: [
                        "Tất cả",
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
            allTags: [{
                _id: 0,
                name: 'Tất cả'
            }]
        };
    }

    componentDidMount() {
        this.getTags();
    }

    getTags = async () => {
        try {
            const res = await callAPI('user/listtags', 'GET', {});

            if (res.data.status === "success") {
                res.data.allTags.unshift({
                    _id: 0,
                    name: 'Tất cả'
                });

                this.setState({
                    allTags: res.data.allTags
                });
            }
        } catch (e) {
            //
        }
    }

    handleSortChange(e) {
        this.setState({ sort: e.target.value });
    }

    handleProvinceChange(e) {
        this.setState({ province: e.target.value, district: "Tất cả" });
    }

    handleDistrictChange(e) {
        this.setState({ district: e.target.value });
    }

    handlePriceChange(e) {
        this.setState({ price: e.target.value });
    }

    handleTagChange(e) {
        this.setState({ tag: e.target.value });
    }

    render() {
        const st = this.props;
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

        const listtags = state.allTags.map((tag) => {
            return (
                <option value={tag.name}>{tag.name}</option>
            );
        });

        return (
            <div className="text-info h-100 bg-secondary container rounded m-2 mb-md-3 " >
                <form className="form-inline mx-auto " style={{ height: "80px" }}
                    onSubmit={(e) => {
                        e.preventDefault();

                        const data = this.state;

                        st.onClick(data);
                    }}>
                    <div className="ml-md-2">
                        <label>Sắp xếp</label>
                        <select className="form-control sortcb" onChange={this.handleSortChange}>
                            <option value="1">Số hợp đồng tăng dần</option>
                            <option value="-1">Số hợp đồng giảm dần</option>
                        </select>
                    </div>
                    <div className="ml-md-2 ">
                        <label>Tỉnh</label>
                        <select className="form-control sortcb" onChange={this.handleProvinceChange}>
                            {listProvince}
                        </select>
                    </div>
                    <div className="ml-md-2">
                        <label>Quận/Huyện</label>
                        <select className="form-control sortcb" onChange={this.handleDistrictChange}>
                            {listDisTrict}
                        </select>
                    </div>
                    <div className=" ml-md-2 ">
                        <label htmlFor="filter-category">Giá</label>
                        <select id="filter-category" name="category" className="form-control sortcb" onChange={this.handlePriceChange}>
                            <option value="0">Tất cả</option>
                            <option value="1">0 - 100 KVNĐ</option>
                            <option value="2">100 - 200 KVNĐ</option>
                            <option value="3">200 - 300 KVNĐ</option>
                            <option value="4">&gt; 300 KVNĐ</option>
                        </select>
                    </div>
                    <div className="ml-md-2 ">
                        <label htmlFor="filter-country">Kỹ năng</label>
                        <select className="form-control sortcb" onChange={this.handleTagChange}>
                            {listtags}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-danger btn-filter-movie mt-md-4 ml-md-4 "><span>Lọc</span></button>
                </form>
            </div>
           
        );
    }
}

export default SortFilterNav;