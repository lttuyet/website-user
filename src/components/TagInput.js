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
		
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			
		
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
           <select className="custom-select custom-select form-control mb-md-3 mt-md-3" defaultValue = "Lớp 1"  onChange={(e)=> { addTags(e); }}>
                <option itemID="1" value="Lớp 1">Lớp 1</option>
                <option itemID="2" value="Lớp 2">Lớp 2</option>
                <option itemID="3" value="Lớp 3">Lớp 3</option>
                <option itemID="4" value="Lớp 4">Lớp 4</option>
                <option itemID="5" value="Lớp 5">Lớp 5</option>
                <option itemID="6" value="Lớp 6">Lớp 6</option>
                <option itemID="7" value="Lớp 7">Lớp 7</option>
                <option itemID="8" value="Lớp 8">Lớp 8</option>
                <option itemID="9" value="Lớp 9">Lớp 9</option>
                <option itemID="10" value="Lớp 10">Lớp 10</option>
                <option itemID="11" value="Lớp 11">Lớp 11</option>
                <option itemID="12" value="Lớp 12">Lớp 12</option>
            </select>
            <select className="custom-select custom-select form-control mb-md-3 mt-md-3" defaultValue = "Người học"  onChange={(e)=> {addTags(e);}}>
                <option itemID="learner" value="Người học" >Người học</option>
                <option itemID="tutor" value="Người dạy">Người dạy</option>
            </select>
			
		</div>
  );              
};

export default TagInput;
