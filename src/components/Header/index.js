import React from 'react';

import { Header } from './sytles';

export default function header(props) {
	const imagePlayer = localStorage.getItem('@UpCar:imageplayer');
	const namePlayer = localStorage.getItem('@UpCar:nameplayer');
	console.log(localStorage)

	return (
		<Header>
			<div className='pause'>
				<span>{props.playerPause}</span>
			</div>

			<div className='turbo'>
				<span>Turbo = T</span>
			</div>

			<div className='palyer'>
				<img src={imagePlayer} height='45' />
				<span className='marinf-left-10'>{namePlayer}</span>
			</div>
		</Header>
	);
}
