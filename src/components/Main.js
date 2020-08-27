import React, { Component } from 'react'
import loading from '../images/loading.gif'

class Main extends Component {

	constructor (props) {
		super(props)
		this.state = {
			picturePrompt: loading,
			textPrompt: '',
			selectedPromptType: 'picture'
		}
		this.handleFetchPicture = this.handleFetchPicture.bind(this);
		this.handlePromptTypeChange = this.handlePromptTypeChange.bind(this);
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

	handleFetchPicture() {
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


    render() {
        return (
        	<main>
        		<section>
        			<div id="promptContainer">
	        			{this.state.selectedPromptType === 'picture' ? 
	        				<figure><img src={this.state.picturePrompt} alt="Prompt"  /></figure> : <p></p>
	        			}
	        			{this.state.selectedPromptType === 'text' ? 
	        				<p>{this.state.textPrompt}</p> : <p></p>
	        			}
	        			{this.state.selectedPromptType === 'both' ? 
	        				<figure><img src={this.state.picturePrompt} alt="Prompt"  /> <figcaption>{this.state.textPrompt}</figcaption></figure> : <p></p>
	        			}
        			</div>
	        		<div>
	        			<p>Write something based off of this prompt!</p>

	        			<form>
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
					    </form>

					    <button onClick={this.handleFetchPicture}>New Prompt</button>
	        		</div>
        		</section>
        	</main>
        );
    }
}

export default Main;