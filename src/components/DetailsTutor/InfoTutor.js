import React, { PureComponent } from 'react';
import '../App.css';
import './detailsTutor.css';
import img from '../ListTutors/logo192.png';
import ShowRating from './ShowRating';

class infoTutor extends PureComponent {
    render() {
        const st = this.props;

        if (!st.tutor) {
            return (<div />);
        }

        // Tính tỉ lệ thành công
        // Tỉ lệ đánh giá từ người học
        let successRate = "Chưa có hợp đồng";
        let ratedRate = 0;
        let countRate = 0;

        if (st.contracts) {
            const successContracts = st.contracts.filter(item => {
                if (item.status === 'Đã thanh toán') {
                    return true;
                }

                return false;
            });
            const sizeSuccessContracts = successContracts.length;

            const failedContracts = st.contracts.filter(item => {
                if (item.status === 'Bị khiếu nại') {
                    return true;
                }

                return false;
            });
            const sizeFailedContracts = failedContracts.length;

            successRate = `${(Math.round(
                (sizeSuccessContracts / (sizeSuccessContracts + sizeFailedContracts)) *
                100,
                0
            )).toString()}%`;

            //---------------------------------
            let i;
            const sizeContracts = st.contracts.length;
            let sumRate = 0;

            for (i = 0; i < sizeContracts; i += 1) {
                if (st.contracts[i].rate != null) {
                    sumRate += st.contracts[i].rate;
                    countRate += 1;
                }
            }

            if (countRate !== 0) {
                ratedRate = Math.ceil(sumRate / (countRate * 5));
            }
        }

        // Danh sách tags
        const { tags } = st;
        const sizeTag = tags.length;
        let tag = '';
        let i;

        for (i = 0; i < sizeTag - 1; i += 1) {
            tag = `${tag}${tags[i].name} | `;
        }

        if (i < sizeTag) {
            tag = `${tag}${tags[i].name}`;
        }

        return (
            <div className="details w-100">
                <div className="preview ">
                    <div className="preview-pic tab-content">
                        {!st.tutor.image ? (
                            <img src={img} className="mx-auto d-block" alt="..." />
                        ) : (
                                <img src={st.tutor.image} className="mx-auto d-block" alt="..." />
                            )}
                    </div>
                </div>
                <h4 className="product-title mx-auto">{st.tutor.name}</h4>
                <div className="rating product-description">
                    <ShowRating value={ratedRate} />
                    <span className="review-no ml-md-3">{countRate} lượt đánh giá từ người học</span>
                </div>
                <p className="product-description">{st.tutor.intro}</p>
                <p className="product-description">
                    Địa chỉ: {st.tutor.address}
                </p>
                <p className="product-description">Tỉ lệ thành công: {successRate}</p>
                <p className="product-description">Kỹ năng: {tag}</p>
                {((st.isLogin && st.role === 'learner') || !st.isLogin) &&
                    <button type="button" className="btn btn-success" data-toggle="button" aria-pressed="false">
                        Thuê
                    </button>
                }
            </div>
        );
    }
}

export default infoTutor;
