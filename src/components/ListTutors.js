/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import CardTutor from './CardTutor';
import './App.css';
import Menu from '../containers/MenuContainer';
import ListPages from './ListPages';
import { callAPI } from '../utils/apiCaller';
import Footer from './layout/Footer';

class ListTutor extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            tutors: [],
            error: false,
            page: 0,
        };
    }

    componentDidMount() {
        this.getTutors(0);
    }

    getTutors = async (_page) => {
        try {
            const req = {
                page: _page
            };
            const res = await callAPI('user/listtutors', 'POST', req);

            this.setState({
                tutors: res.data.tutors,
                page: _page,
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

    render() {
        const st = this.state;

        if (st.error) {
            return <div />;
        }

        const { tutors } = this.state;
        const size = Math.ceil(tutors.length / 6);
        const { page } = this.state;
        const start = page * 6;
        const tutorsCurrentPage = tutors.slice(start, start + 6);
        const tutorCards = tutorsCurrentPage.map((tutor) => {
            return (
                <CardTutor tutor={tutor} />
            );
        });

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
                            <p className=" col m-md-2 mr-md-4 mytitle separate">
                                DANH SÁCH GIA SƯ
                            </p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-1">
                            {tutorCards}
                        </div>
                        <div className="row mt-md-5 mr-md-2 float-right">
                            <ListPages className="page" current={page} size={size} onClick={(p) => { this.setPage(p); }} />
                        </div>

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}



export default ListTutor;