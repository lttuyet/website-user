/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import './App.css';
import './TagInput.css';

const TagInput = (props) => {
    const [tags, setTags] = React.useState(props.tags);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};
	return (
		<div className="tags-input">
			<ul id="tags">
				{tags.map((tag, index) => (
					<li key={index} className="tag">
						<span className='tag-title'>{tag}</span>
                        
						<span className='tag-close-icon'
							onClick={() => removeTags(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>
            <select className="custom-select custom-select form-control mb-md-3 mt-md-3" defaultValue = "learner"  onChange={(e)=> {addTags(e);}}>
                <option value="learner" >Người học</option>
                <option value="tutor">Người dạy</option>
            </select>
			
		</div>
  );              
};

export default TagInput;
