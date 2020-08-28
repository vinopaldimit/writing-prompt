import React, { Component } from 'react'
import loading from '../images/loading.gif'

class Main extends Component {

	constructor (props) {
		super(props)
		this.state = {
			picturePrompt: loading,
			textPrompt: '',
			selectedPromptType: 'picture',
			submittedPromptType: 'picture'
		}
		this.handleFetch = this.handleFetch.bind(this);
		this.handlePromptTypeChange = this.handlePromptTypeChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
		this.fetchPicture()
		this.fetchText()
	}


	fetchPicture() {
		fetch('https://picsum.photos/400').then(res=>res.blob())
		.then(data => {
			var urlCreator = window.URL || window.webkitURL;
   			var imageUrl = urlCreator.createObjectURL(data);
			this.setState({picturePrompt: imageUrl})
		})
	}

	fetchText() {
		fetch('https://random-word-api.herokuapp.com/word?number=5&swear=1').then(res=>res.json())
		.then(data => {
			this.setState({textPrompt: data[0]})
		})
	}

	handleFetch() {
		this.setState({picturePrompt: loading})
		this.setState({textPrompt: ''})
		if(this.state.selectedPromptType === 'picture' || this.state.selectedPromptType === 'both')
		{
			this.fetchPicture()
		}
		if(this.state.selectedPromptType === 'text' || this.state.selectedPromptType === 'both')
		{
			this.fetchText()
		}
	}

	handlePromptTypeChange(event) {
		this.setState({selectedPromptType: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault();
		this.handleFetch()
		this.setState({submittedPromptType: this.state.selectedPromptType})
	}


    render() {
        return (
        	<main>
        		<section>
        			<div id="promptContainer">
	        			{this.state.submittedPromptType === 'picture' ? 
	        				<figure><img src={this.state.picturePrompt} alt="Prompt"  /></figure> : <p></p>
	        			}
	        			{this.state.submittedPromptType === 'text' ? 
	        				<p>{this.state.textPrompt}</p> : <p></p>
	        			}
	        			{this.state.submittedPromptType === 'both' ? 
	        				<figure><img src={this.state.picturePrompt} alt="Prompt"  /> <figcaption>{this.state.textPrompt}</figcaption></figure> : <p></p>
	        			}
        			</div>
	        		<div>
	        			<p>Choose what type of prompt you want:</p>

	        			<form onSubmit={this.handleSubmit}>
				        	<label>
				            	<input type="radio" value="picture" checked={this.state.selectedPromptType === 'picture'} 
	                  			onChange={this.handlePromptTypeChange} />
				            	picture
				          	</label>
				          	<label>
				            	<input type="radio" value="text" checked={this.state.selectedPromptType === 'text'} 
	                  			onChange={this.handlePromptTypeChange} />
				            	text
				          	</label>
				          	<label>
				            	<input type="radio" value="both" checked={this.state.selectedPromptType === 'both'} 
	                  			onChange={this.handlePromptTypeChange} />
				            	picture & text
				          	</label>
				          	<button type="submit">New Prompt</button>
					    </form>
	        		</div>
        		</section>
        	</main>
        );
    }
}

export default Main;