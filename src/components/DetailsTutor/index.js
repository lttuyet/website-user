import React, { PureComponent } from 'react';
import '../App.css';
import './detailsTutor.css';
import { callAPI } from '../../utils/apiCaller';
import Menu from '../../containers/MenuContainer';
import Footer from '../layout/Footer';
import InfoTutor from '../../containers/InfoTutorContainer';
import ListPages from '../ListTutors/ListPages';
import HistoryContract from './HistoryContract';

// error: bạn không thể thuê vì gia sư này  chưa cập nhật thông tin đầy đủ
// vui lòng đăng nhập để thực hiện chức năng này
// Bạn không thể thực hiện chức năng này với vai trò là gia sư, vui lòng đăng nhập tài khoản người học
// chuyển tới trang tạo hợp đồng
// Bạn vui lòng cập nhật đầy đủ thông tin người học để thực hiện chức năng này

/*

          {((data.isLogin&&data.role === 'learner')||(!data.isLogin)) &&
            <button
              type="button"
              className="btn btn-success my-2 m-md-2 "
              onClick={() => {
                if (!data.isLogin) {
                  window.location.href = "/login";
                }
              }}
            >
              Thuê
        </button>}

*/

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
        const { error } = st;

        if (error !== 0) {
            return (
                <div className="bg-light container-fluid">
                    <Menu />
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
        const listContracts = st.contracts.filter(item => {
            if (item.status === 'Bị khiếu nại' || item.status === 'Đã thanh toán') {
                return true;
            }

            return false;
        });

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
                    {st.loaded &&
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
