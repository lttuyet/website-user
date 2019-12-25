/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import '../App.css';
import '../extra.css';
import '../shard.dashboard.css';
import { callAPIAuth } from '../../utils/apiCaller';
import TagInput from './TagInput';

class TutorInfo extends PureComponent {
    constructor(props) {
        super(props);

        const st = this.props;

        this.state = {
            intro: st.value.intro,
            tags: st.value.tags,
            price: st.value.price,
        };

        this.handleIntroChange = this.handleIntroChange.bind(this);
        this.handleTagsChange = this.handleTagsChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handleIntroChange(e) {
        this.setState({
            intro: e.target.value
        });
    }

    handleTagsChange(tags) {
        this.setState({
            tags: tags.slice()
        });
    }

    handlePriceChange(e) {
        this.setState({ price: e.target.value });
    }

    render() {
        const st = this.props;
        const prs = st.value;
        const { state } = this;

        return (
            <div>
                <div className="card card-small mb-4">
                    <div className="card-header border-bottom">
                        <h6 className="m-0">Giới thiệu bản thân</h6>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item p-3">
                            <div className="row">
                                <div className="col">
                                    <form
                                        onSubmit={event => {
                                            event.preventDefault();

                                            const data = {
                                                intro: state.intro,
                                                tags: state.tags,
                                                price: state.price
                                            };

                                            // eslint-disable-next-line no-unused-vars
                                            const result = callAPIAuth('updatetutorinfo', 'POST', prs.token, data).then((res) => {
                                                try {
                                                    const { status } = res.data;

                                                    if (status === "failed") {
                                                        st.handleInfo(2, "Thông tin gia sư của bạn chưa được cập nhật!");
                                                    } else {
                                                        st.handleInfo(1, 'Thông tin gia sư của bạn đã được cập nhật!');
                                                        st.handleTutorInfo(data.intro, data.tags, data.price);
                                                    }
                                                } catch (err) {
                                                    st.handleInfo(2, "Lỗi kết nối, vui lòng thử lại!");
                                                }
                                            });
                                        }}>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="feDescription">
                                                    Giới thiệu bản thân
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    name="feDescription"
                                                    rows="5"
                                                    defaultValue={state.intro}
                                                    onChange={this.handleIntroChange}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="feDescription">Tag kĩ năng</label>
                                            <TagInput value={state.tags} handleTagsChange={this.handleTagsChange} />
                                        </div>
                                        <div>
                                            <div className="form-group">
                                                <label htmlFor="feInputAddress">
                                                    Giá theo giờ: (KVNĐ)
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="feInputCost"
                                                    defaultValue={state.price}
                                                    onChange={this.handlePriceChange}
                                                />
                                            </div>
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

            </div>
        );
    }
}

export default TutorInfo;