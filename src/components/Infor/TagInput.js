/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PureComponent } from 'react';
import '../App.css';
import './TagInput.css';
import { callAPI } from '../../utils/apiCaller';

class TagInput extends PureComponent {
	constructor(props) {
		super(props);

		this.handleListTagsChange = this.handleListTagsChange.bind(this);
		this.handleSelectedTags = this.handleSelectedTags.bind(this);

		const st = this.props;

		this.state = {
			tags: [],
			selectedTags: st.value
		};
	}

	componentDidMount() {
		this.getTags();
	}

	getTags = async () => {
		try {
			const res = await callAPI('user/listtags', 'GET', {});

			if (res.data.status === "success") {
				this.setState({
					tags: res.data.allTags,
				});
			}
		} catch (e) {
			// console.log("Error load tag list");
		}
	}

	handleListTagsChange(e) {
		const prs=this.props;
		const st = this.state;
		const _tags = st.tags;
		const i = _tags.findIndex((element) => {
			return element.name === e.target.value;
		});
		const _selectedTags = st.selectedTags;
		const j = _selectedTags.findIndex((element) => {
			return element.name === e.target.value;
		});
		const tag = _tags[i];

		if (i > -1 && j < 0) {
			_selectedTags.push(tag);

			this.setState({
				selectedTags: _selectedTags.slice()
			});

			prs.handleTagsChange(_selectedTags);
		}
	}

	handleSelectedTags(id) {
		const prs=this.props;
		const st = this.state;
		const _selectedTags = st.selectedTags;

		this.setState({
			selectedTags: _selectedTags.filter((item) => { if (item._id !== id) { return true; } return false; })
		});

		prs.handleTagsChange(_selectedTags.filter((item) => { if (item._id !== id) { return true; } return false; }));
	}

	render() {
		const st = this.state;

		const listTags = st.tags.map((item) => {
			return (<option>{item.name}</option>);
		});
		let listSelectedTags;
		if (st.selectedTags) {
			listSelectedTags = st.selectedTags.map((item) => {
				return (
					<li className="tag">
						<span className='tag-title'>{item.name}</span>
						<span className='tag-close-icon'
							onClick={() => { this.handleSelectedTags(item._id); }}
						>
							x
						</span>
					</li>);
			});
		}

		return (
			<div className="tags-input">
				<ul id="tags">
					{listSelectedTags}
				</ul>
				<select className="custom-select custom-select form-control mb-md-3 mt-md-3" defaultValue={listTags[0]} onChange={this.handleListTagsChange}>
					{listTags}
				</select>
			</div>
		);
	}
};

export default TagInput;
