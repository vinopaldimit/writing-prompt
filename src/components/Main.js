import React, { Component } from 'react'
import loading from '../images/loading.gif'

class Main extends Component {

	constructor (props) {
		super(props)
		this.state = {
			picturePrompt: loading
		}
		this.handleFetchPicture = this.handleFetchPicture.bind(this);
		this.fetchPicture()
	}


	fetchPicture() {
		fetch('https://picsum.photos/400').then(res=>res.blob())
		.then(data => {
			var urlCreator = window.URL || window.webkitURL;
   			var imageUrl = urlCreator.createObjectURL(data);
			this.setState({picturePrompt: imageUrl})
		})
	}

	handleFetchPicture() {
		this.fetchPicture()
	}


    render() {
        return (
        	<main>
        		<section>
	        		<figure>
	        			<img src={this.state.picturePrompt} alt="Prompt" height="400" width="400" />
	        		</figure>
	        		<div>
	        			<p>Write something based off of this picture!</p>
	        			<button onClick={this.handleFetchPicture}>New Prompt</button>
	        		</div>
        		</section>
        	</main>
        );
    }
}

export default Main;