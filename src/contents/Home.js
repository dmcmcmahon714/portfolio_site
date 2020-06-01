import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../img/profile_pic.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'


class Home extends Component {


	render() {
		return (

			<div className="condiv home">

				<img src={profilepic} className="profilepic"></img>

				<ReactTypingEffect className="typingeffect" text={['I'm Dan McMahon,'Welcome to my development portfolio']} speed={100} eraseDelay={700}/>

				<Social />
		</div>
		)
	}
}
export default Home