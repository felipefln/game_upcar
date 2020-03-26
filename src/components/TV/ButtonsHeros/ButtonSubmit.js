import React, { Component } from 'react';
import './styles.css';

class ButtonSubmit extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='btn'>
					<button className='btn-submit'>START</button>
				</div>
			</React.Fragment>
		);
	}
}

export default ButtonSubmit;
