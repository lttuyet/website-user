import React, { PureComponent } from 'react';
import '../App.css';
import './detailsTutor.css';
import img from '../ListTutors/logo192.png';
import ShowRating from './ShowRating';

class HistoryContract extends PureComponent {
    render() {
        const st = this.props;
        const contract = st.value;

        if (!contract) {
            return <div />;
        }

        const { learner } = contract;

        return (
            <div className="card text-left container " >
                <div className="card-body mycard" >
                    <div className="row ">
                        <div className="col-2 media">
                            {(!contract.learner.image&&contract.learner.image!=='') ?
                                <img className="align-self-center mr-3 mx-auto" style={{ height: '100px', width: '100px' }} src={learner.image} alt="..." /> :
                                <img className="align-self-center mr-3 mx-auto" style={{ height: '100px', width: '100px' }} src={img} alt="..." />
                            }
                        </div>
                        <div className="card-text col-9 ">
                            <div className="row ml-md-1  mt-md-2">
                                <div className="col-3">
                                    <h5 className="card-title float-left"> {learner.name} </h5>
                                </div>
                                <div className="col-9 ">
                                    <div className="float-right">
                                        <span>{' '}Thời gian học : {contract.startDate} đến {contract.endDate}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-9 ">
                                    <div className="float-left ml-md-2">Tình trạng hợp đồng: {contract.status}</div>
                                </div>
                                <div className="col-3">
                                    <span className=""> Đánh giá: </span>
                                    <div className="rating float-right">
                                        <ShowRating value={contract.rate} />
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="ml-md-4">{contract.comment}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HistoryContract;