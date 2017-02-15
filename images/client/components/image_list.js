// Image List Component

// Import React
import React from 'react'
import ImageDetail from './image_detail'

const IMAGES = [
	{title: 'Pen', link: 'http://dummyimage.com/600x400'},
	{title: 'Apple', link: 'http://dummyimage.com/600x400'},
	{title: 'Pinapple', link: 'http://dummyimage.com/600x400'}
]

// Create Component
const ImageList = () => {
	const RenderedImages = IMAGES.map(image => {
		return <ImageDetail key={image.title} image={image}/>
	});

	return(
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};


// Export component
export default ImageList;