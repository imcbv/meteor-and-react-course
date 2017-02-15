// Image List Component

// Import React
import React from 'react'

// Create Component
const ImageDetail = (props) => {
	return(
		<li className="media list-group-item">
			<div className="media-left">
				<img src={props.image.link} />
			</div>
			<div className="media-body">
				<h4 className="media-heading">
					{props.image.title}
				</h4>
			</div>
		</li>
	);
};


// Export component
export default ImageDetail;