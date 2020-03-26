import React, { Component } from 'react';
import './styles.css';

class ButtonDeadPoll extends Component {
	render() {
		return (
			<>
				<div className='one'>
					<div className='icon'>
						<button className='deadpool'>
							<div className='line'></div>
							<div className='eye-left'>
								<div className='pupil-left'></div>
							</div>
							<div className='eye-right'>
								<div className='pupil-right'></div>
							</div>
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default ButtonDeadPoll;
