import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {

	render() {
		return (
			<div className="condiv">
			<h1 className="subtopic">Education</h1>
			<Widecard title="Software Engineering Immersive" where="General Assembly" from="December 2019" to="May 2020"/>
			<Widecard title="B.A. in Communications - Journalism" where="DePaul University" from="2009" to="2011"/>
</div>
)
}
}
export default Education