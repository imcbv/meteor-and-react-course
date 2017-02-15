// Any js placed here is autocatically ran

// Import React 
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

// Create a component
class App extends Component {
	constructor(props){
		super(props);

		this.state = { images: []};
	}

	componentWillMount(){
		// Load data here
		axios.get("https://api.imgur.com/3/gallery/hot/viral/0")
		.then(response => this.setState({state: response.data.data}))
	}

	render(){
		return(
			<div>
				<ImageList />
			</div>
		);
	}	
};

// Render the component
Meteor.startup( () => {
	ReactDOM.render(<App />, document.querySelector('.container'));
});