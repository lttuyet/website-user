/* eslint-disable func-names */
/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import CardTutor from './CardTutor';
import '../App.css';
import Menu from '../../containers/MenuContainer';
import ListPages from './ListPages';
import { callAPI } from '../../utils/apiCaller';
import Footer from '../layout/Footer';
import SortFilterNav from './SortFilterNav';

class ListTutor extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            tutors: [],
            error: false,
            page: 0,
            sort: 'Tất cả',
            province: 'Tất cả',
            district: 'Tất cả',
            price: 0,
            tag: 'Tất cả'
        };
    }

    componentDidMount() {
        this.getTutors();
    }

    getTutors = async () => {
        try {
            const res = await callAPI('user/listtutors', 'GET', {});

            this.setState({
                tutors: res.data.tutors,
                page: 0,
                error: false
            });
        } catch (e) {
            this.setState({
                error: true
            });
        }
    }

    setPage(current) {
        this.setState({
            page: current
        });
    }

    sortFilter(data) {
        this.setState({
            sort: data.sort,
            province: data.province,
            district: data.district,
            price: data.price,
            tag: data.tag,
            page: 0
        });
    }

    render() {
        const st = this.state;

        if (st.error) {
            return <div />;
        }

        const { tutors } = this.state;

        const filterList = tutors.filter(item => {
            if (st.province !== 'Tất cả') {
                if (item.address.indexOf(st.province) === -1) {
                    return false;
                }
            }

            if (st.district !== 'Tất cả') {
                if (item.address.indexOf(`${st.district},`) === -1) {
                    return false;
                }
            }

            switch (st.price) {
                case '1':
                    if (item.price < 0 || item.price > 100 || !item.price) {
                        return false;
                    }

                    break;
                case '2':
                    if (item.price < 100 || item.price > 200 || !item.price) {
                        return false;
                    }

                    break;
                case '3':
                    if (item.price < 200 || item.price > 300 || !item.price) {
                        return false;
                    }

                    break;
                case '4':
                    if (item.price < 300 || !item.price) {
                        return false;
                    }

                    break;
                default:
            }

            if (st.tag !== 'Tất cả') {
                const { tags } = item;

                const hasTag = tags.findIndex((element) => {
                    return element === st.tag;
                });

                if (hasTag === -1) {
                    return false;
                }
            }


            return true;
        });

        if (st.sort === "-1") {
            filterList.sort(function (a, b) { return a.numOfContracts - b.numOfContracts; });
        } else {
            filterList.sort(function (a, b) { return b.numOfContracts - a.numOfContracts; });
        }

        const size = Math.ceil(filterList.length / 6);
        const { page } = this.state;
        const start = page * 6;
        const tutorsCurrentPage = filterList.slice(start, start + 6);

        let tutorCards = tutorsCurrentPage.map((tutor) => {
            return (
                <CardTutor tutor={tutor} />
            );
        });

        if (tutorCards.length === 0) {
            tutorCards = (<h2 className="text-secondary">Không tìm thấy gia sư theo yêu cầu!</h2>);
        }

        return (
            <div className="bg-light container-fluid">
                <Menu page="listtutors" />
                {st.error &&
                    <div
                        className="alert alert-danger alert-dismissible fade show mb-0"
                        role="alert"
                    >
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                        <i className="fa fa-check mx-2" />
                        <strong>Thất bại!</strong> Xảy ra lỗi trong quá trình tải! Vui lòng thử lại!
                    </div>
                }

                <div className="row ">
                    <div className="container ">
                        <div className="row row-cols-1 row-cols-md-1">
                            <p className=" col m-md-2 mt-md-3 mr-md-4 mytitle separate">
                                DANH SÁCH GIA SƯ
                            </p>
                        </div>
                        <div className="row">
                            <SortFilterNav onClick={(data) => this.sortFilter(data)} />
                        </div>
                        <div className="row row-cols-1 row-cols-md-1">
                            {tutorCards}
                        </div>
                        <div className="row mt-md-5 mr-md-2 float-right">
                            <ListPages className="page" current={page} size={size} onClick={(p) => { this.setPage(p); }} />
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ListTutor;