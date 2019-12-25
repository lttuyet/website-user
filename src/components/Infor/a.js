/* eslint-disable no-loop-func */
/* eslint-disable react/no-array-index-key */
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
			tag:'',
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
			//
		}
	}

	async handleListTagsChange(e) {
		const st = this.state;
		const _tags = st.tags;
		const i = _tags.findIndex((element) => {
			return element.name === e.target.value;
		});
		const _selectedTags = st.selectedTags;
		const j=_selectedTags.findIndex((element) => {
			return element.name === e.target.value;
		});
		const tag = _tags[i];

		_selectedTags.push(tag);

		if (i > -1&&j===-1) {
			await this.setState({
				// eslint-disable-next-line react/no-unused-state
				tag: tag._id,
				selectedTags: _selectedTags
			});
		}
	}

	handleSelectedTags(id) {
		console.log("11111111111111111111111111");
		const st = this.state;
		const _selectedTags = st.selectedTags;
		const i = _selectedTags.findIndex((element) => {
			return element._id === id;
		});

		if(i>-1){
			_selectedTags.splice(i,1);

			this.setState({
				tag:id,
				selectedTags: _selectedTags
			});
		}
	}

	render() {
		const prs = this.props;
		const st = this.state;
		console.log("2222222222222222222");
		console.log(st);
		const listTags = st.tags.map((item) => {
			return (<option itemID={item._id} value={item.name}>{item.name}</option>);
		});
		let listSelectedTags;
		if(st.selectedTags){
			listSelectedTags = st.selectedTags.map((item) => {
				return (
					<li key={item._id} className="tag">
						<span className='tag-title'>{item.name}</span>
						<span className='tag-close-icon'
							onClick={(e) => {e.preventDefault();this.handleSelectedTags(item._id);}}
						>
							x
						</span>
					</li>);
			});
		}
		


		/* const [tags, setTags] = React.useState(st.tags);
		const removeTags = indexToRemove => {
			setTags([...tags.filter((_, index) => index !== indexToRemove)]);
		};
		const addTags = event => {
			setTags([...tags, event.target.value]);
			prs.selectedTags([...tags, event.target.value]);
		}; */

		return (
			<div className="tags-input">
				<ul id="tags">
					{
					listSelectedTags/* tags.map((tag, index) => (
						<li key={index} className="tag">
							<span className='tag-title'>{tag}</span>

							<span className='tag-close-icon'
								onClick={() => handleSelectedTags(index)}
							>
								x
						</span>
						</li>
					)) */}
				</ul>
				<select className="custom-select custom-select form-control mb-md-3 mt-md-3" defaultValue={listTags[0]} onChange={this.handleListTagsChange}>
					{listTags}
				</select>
			</div>
		);
	}
};

export default TagInput;
