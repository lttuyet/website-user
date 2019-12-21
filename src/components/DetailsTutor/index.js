/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-cond-assign */
/* eslint-disable no-return-assign */
import React, { PureComponent } from 'react';
import '../App.css';
import './detailsTutor.css';
import { callAPI } from '../../utils/apiCaller';
import Menu from '../../containers/MenuContainer';
import Footer from '../layout/Footer';
import InfoTutor from '../../containers/InfoTutorContainer';
import ListPages from '../ListTutors/ListPages';
import img from '../ListTutors/logo192.png';
import ShowRating from './ShowRating';
import HistoryContract from './HistoryContract';



class DetailsTutor extends PureComponent {
    constructor(props) {
        super(props);
        const prs = this.props;

        this.state = {
            id: prs.match.params.id,
            tutor: {},
            contracts: [],
            tags: [],
            error: 0,
            page: 0,
            loaded: false
        };
    }

    componentDidMount() {
        const st = this.state;

        this.getTutor(st.id);
    }

    getTutor = async id => {
        try {
            const res = await callAPI('user/detailstutor', 'POST', { id });

            if (res.data.status === 'failed') {
                this.setState({
                    error: "res.data.message"
                });
            }

            this.setState({
                tutor: res.data.tutor,
                tags: res.data.tags,
                contracts: res.data.contracts,
                error: 0,
                page: 0,
                loaded: true
            });
        } catch (e) {
            this.setState({
                error: 2
            });
        }
    };

    setPage(current) {
        this.setState({
            page: current
        });
    }

    render() {
        const st = this.state;
        let { error } = st;

        // Danh sách hợp đồng
        const listContracts = st.contracts.filter(item => {
            if (item.status === 'Bị khiếu nại'||item.status==='Đã thanh toán') {
                return true;
            }

            return false;
        });
        
        const listShowContracts = listContracts.map((contract) => {
            return (
                <HistoryContract value={contract}/>
            );
        });

        return (
            <div className="bg-light container-fluid">
                <Menu />
                {st.error !== 0 ? (
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
                        <strong>Thất bại!</strong>
                        {error}
                    </div>
                ) : (
                        <div>
                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb bg-white ">
                                    <li className="breadcrumb-item text-info">
                                        <a href="/">Trang chủ</a>
                                    </li>
                                    <li className="breadcrumb-item text-info">
                                        <a href="/listtutors">Danh sách gia sư</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {st.tutor.name}
                                    </li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="container col-4">
                                    <div className="card mt-md-1">
                                        <div className="container card-body">
                                            <div className="wrapper ">
                                                <InfoTutor tutor={st.tutor} contracts={st.contracts} tags={st.tags} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container col-8">
                                    <div className="row m-md-2 mb-md-1">
                                        <h4 className="separate text-center text-danger">LỊCH SỬ DẠY HỌC</h4>
                                    </div>
                                    <div className="myscroll">
                                        {listShowContracts}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default DetailsTutor;
