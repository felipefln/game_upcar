import React, { Component } from 'react';
import './styles.css';

class ButtonCapitaoAmerica extends Component {
	render() {
		return (
			<>
				<div className='two'>
					<div className='icon'>
						<button className='captain-america'>
							<div className='hat'>
								<h1>A</h1>
								<div className='wings-left'></div>
								<div className='wings-right'></div>
								<div className='hat-left'>
									<div className='eye'>
										<div className='ball'></div>
									</div>
								</div>
								<div className='hat-right'>
									<div className='eye'>
										<div className='ball'></div>
									</div>
								</div>
							</div>
							<div class='mouth'></div>
							<div class='ears'></div>
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default ButtonCapitaoAmerica;
