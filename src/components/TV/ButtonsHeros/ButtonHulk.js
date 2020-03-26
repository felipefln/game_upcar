import React, { Component } from 'react';
import './styles.css';

class ButtonHulk extends Component {
	render() {
		return (
			<>
				<div className='three'>
					<div className='icon'>
						<button className='hulk'>
							<div class='eyebrow-left'></div>
							<div class='eyeball'>
								<div class='right'></div>
							</div>
							<div class='eyebrow-right'></div>
							<div class='teeth'></div>
						</button>
						<div class='hair'>
							<div class='hair1'></div>
							<div class='hair2'></div>
							<div class='hair3'></div>
							<div class='hair4'></div>
							<div class='hair5'></div>
							<div class='hair6'></div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default ButtonHulk;
