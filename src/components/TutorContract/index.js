import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';
import '../DetailsTutor/detailsTutor.css';
import Menu from '../../containers/MenuContainer';
import Footer from '../layout/Footer';
import ListPages from '../ListTutors/ListPages';
import HistoryContract from '../DetailsTutor/HistoryContract';
import { callAPIAuth } from '../../utils/apiCaller';

class DetailsTutor extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            contracts: [],
            error: 0,
            page: 0,
            loaded: false
        };
    }

    componentDidMount() {
        this.getContracts();
    }

    getContracts = async () => {
        try {
            const { token } = this.props;
            const res = await callAPIAuth('tutorcontract', 'POST', token, {});

            if (res.data.status === 'failed') {
                this.setState({
                    error: "res.data.message"
                });
            }

            this.setState({
                contracts: res.data.contracts,
                error: 0,
                page: 0,
                loaded: true
            });
        } catch (e) {
            this.setState({
                error: "Lỗi kết nối! Vui lòng load lại trang!"
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
        const state = this.props;
        const { error } = st;

        if (!state.isLogin) {
            return <Redirect to="/login" />;
        }

        if (error !== 0) {
            return (
                <div className="bg-light container-fluid">
                    <Menu />
                    <div>
                        <div className="alert alert-danger alert-dismissible fade show mb-0" role="alert" >
                            <i className="fa fa-check mx-2" />
                            <strong>Thất bại!</strong>
                            {" "}{error}
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        }

        // Danh sách hợp đồng
        const listContracts = st.contracts;

        const size = Math.ceil(listContracts.length / 6);
        const { page } = this.state;
        const start = page * 6;
        const listCurrentContracts = listContracts.slice(start, start + 6);

        let listShowContracts = listCurrentContracts.map((contract) => {
            return (
                <HistoryContract value={contract} />
            );
        });

        if (listShowContracts.length === 0) {
            listShowContracts = (<h2 className="text-secondary">Chưa có hợp đồng</h2>);
        }

        return (
            <div className="bg-light container-fluid">
                <Menu />
                <div>
                    {st.loaded &&
                        <div className="row">
                            <div className="container">
                                <div className="row m-md-2 mb-md-1">
                                    <h4 className="separate text-center text-danger">DANH SÁCH HỢP ĐỒNG DẠY HỌC</h4>
                                </div>
                                <div >
                                    {listShowContracts}
                                </div>
                                <div className="row mt-md-1 mr-md-2 float-right">
                                    <ListPages className="page" current={page} size={size} onClick={(p) => { this.setPage(p); }} />
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

export default DetailsTutor;
