import React, { Component } from 'react'

class Footer extends Component {



    render() {
        return (
        	<footer>
        		<div>
        			<p>©2020 Jane Vinopal-Dimit</p>
        			<a href="mailto:vinopaldimit@gmail.com">vinopaldimit@gmail.com</a>
        		</div>
        		<div>
        			<p>Loading gif made with <a href="https://loading.io/">loading.io</a> using their free license.</p>
        			<p><a href="https://picsum.photos/">Lorem Picsum API</a> used to generate picture prompts.</p>
        		</div>
        	</footer>
        );
    }
}

export default Footer;