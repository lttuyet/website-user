/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-cond-assign */
/* eslint-disable no-return-assign */
import React, { PureComponent } from 'react';
import './App.css';
import './detailsTutor.css';
import { callAPI } from '../utils/apiCaller';
import Menu from '../containers/MenuContainer';
import ListPages from './ListTutors/ListPages';
import img from './ListTutors/logo192.png';

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
            page: 0
        };
    }

    componentDidMount() {
        const st = this.state;

        this.getTutor(st.id);
    }

    getTutor = async (id) => {
        try {
            const res = await callAPI('user/detailstutor', 'POST', { id });

            if (res.data.status === "failed") {
                this.setState({
                    error: 1
                });
            }

            this.setState({
                tutor: res.data.tutor,
                tags: res.data.tags,
                contracts: res.data.contracts,
                error: 0,
                page: 0
            });
        } catch (e) {
            this.setState({
                error: 2
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
        let error = '';

        if (st.error === 1) {
            error = 'Không tìm thấy thông tin gia sư!';
        }

        if (st.error === 2) {
            error = 'Có lỗi trong quá trình tải! Vui lòng tải lại trang!';
        }

        // Tính tỉ lệ thành công
        const successContracts = st.contracts.filter(item => {
            if (item.status === "Đã thanh toán") {
                return true;
            }

            return false;
        });

        const sizeSuccessContracts = successContracts.length;

        const failedContracts = st.contracts.filter(item => {
            if (item.status === "Bị khiếu nại") {
                return true;
            }

            return false;
        });

        const sizeFailedContracts = failedContracts.length;
        const successRate = Math.round((sizeSuccessContracts / (sizeSuccessContracts + sizeFailedContracts)) * 100, 0);

        // Tỉ lệ đánh giá từ người học
        let i = 0;
        const sizeContracts = st.contracts.length;
        let sumRate = 0;
        let countRate = 0;
        let ratedRate = 0;

        for (i = 0; i < sizeContracts; i += 1) {
            if (st.contracts[i].rate != null) {
                sumRate += st.contracts[i].rate;
                countRate += 1;
            }
        }

        if (countRate !== 0) {
            ratedRate = Math.ceil((sumRate / (countRate * 5)));
        }

        // Danh sách tags
        const { tags } = st;
        const sizeTag = tags.length;
        let tag = "";

        for (i = 0; i < sizeTag - 1; i += 1) {
            tag = `${tag}${tags[i].name} | `;
        }

        if (i < sizeTag) {
            tag = `${tag}${tags[i].name}`;
        }

        return (
            <div className="bg-light container-fluid">
                <Menu page="listtutors" />
                {st.error !== 0 ?
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
                        <strong>Thất bại!</strong>{error}
                    </div> :
                    <div >
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                                <li className="breadcrumb-item"><a href="/listtutors">Danh sách gia sư</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{st.tutor.name}</li>
                            </ol>
                        </nav>
                        <div className="container">
                            <div className="card">
                                <div className="container-fliud">
                                    <div className="wrapper row">
                                        <div className="preview col-md-6">
                                            <div className="preview-pic tab-content">
                                                {!st.tutor.image ? <img src={img} className="mx-auto d-block" alt="..." /> :
                                                    <img src={st.tutor.image} alt="..." />}
                                            </div>
                                        </div>
                                        <div className="details col-md-6">
                                            <h3 className="product-title">{st.tutor.name}</h3>
                                            <div className="rating">
                                                <div className="stars">
                                                    {((ratedRate -= 1) >= 0) ? <span className="fa fa-star checked" /> : <span className="fa fa-star " />}
                                                    {((ratedRate -= 2) >= 0) ? <span className="fa fa-star checked" /> : <span className="fa fa-star " />}
                                                    {((ratedRate -= 3) >= 0) ? <span className="fa fa-star checked" /> : <span className="fa fa-star " />}
                                                    {((ratedRate -= 4) >= 0) ? <span className="fa fa-star checked" /> : <span className="fa fa-star " />}
                                                    {((ratedRate -= 5) >= 0) ? <span className="fa fa-star checked" /> : <span className="fa fa-star " />}
                                                </div>
                                                <span className="review-no">{countRate} lượt đánh giá từ người học</span>
                                            </div>
                                            <p className="product-description">{st.tutor.intro}</p>
                                            <p className="product-description">Địa chỉ: {st.tutor.address}</p>
                                            <p className="product-description">Tỉ lệ thành công: {successRate}%</p>
                                            <p className="product-description">Kỹ năng: {tag}</p>
                                            <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false">
                                                Single toggle
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        



















                        <div className=" container">
                            <div>
                                <div className="float-left">
                                    <h1 className="text-center">Lịch sử làm người dạy</h1>
                                    <div >
                                        <a className="list-group-item row">
                                            <div className="media col-md-3">
                                                <figure>
                                                    <img className="img-rounded img-responsive mx-auto d-block" src={img} alt="..." />
                                                    <p>{st.tutor.name}</p>
                                                </figure>
                                            </div>
                                            <div className="col-md-6">
                                                <h4 className="list-group-item-heading"> List group heading </h4>
                                                <p className="list-group-item-text"> Eu eum corpora torquatos, ne postea constituto mea, quo tale lorem facer no. Ut sed odio appetere partiendo, quo meliore salutandi ex. Vix an sanctus vivendo, sed vocibus accumsan petentium ea.
                                                    Sed integre saperet at, no nec debet erant, quo dico incorrupte comprehensam ut. Et minimum consulatu ius, an dolores iracundia est, oportere vituperata interpretaris sea an. Sed id error quando indoctum, mel suas saperet at.
                    </p>
                                            </div>
                                            <div className="col-md-3 text-center">
                                                <h2> 12424 <small> votes </small></h2>
                                                <button type="button" className="btn btn-primary btn-lg btn-block">Vote Now!</button>
                                                <div className="stars">
                                                    <span className="glyphicon glyphicon-star" />
                                                    <span className="glyphicon glyphicon-star" />
                                                    <span className="glyphicon glyphicon-star" />
                                                    <span className="glyphicon glyphicon-star" />
                                                    <span className="glyphicon glyphicon-star-empty" />
                                                </div>
                                                <p> Average 3.9 <small> / </small> 5 </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );

    }
}

/*
 
                                            
*/

export default DetailsTutor;
