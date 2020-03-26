import React, { Component } from 'react';
import './styles.css';

class ButtonIronMan extends Component {
	render() {
		return (
			<>
				<div className='four'>
					<div className='icon'>
						<button className='ironman'>
							<div class='mask'>
								<div class='middle'></div>
								<div class='red-line'></div>
								<div class='yellow-line'></div>
								<div class='glowing-eyes'></div>
							</div>
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default ButtonIronMan;
