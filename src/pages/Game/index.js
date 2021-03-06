import React, { useState, useEffect } from 'react';

// Import components
import Header from '../../components/Header';
import Car from '../../components/car';

// Import Styled Components
import { Scenery, Shortcuts } from './styles';
import './styles.css';

import musicMP3File from '../../assets/sounds/music.mp3';
import turboMP3File from '../../assets/sounds/turbo.mp3';
import shortcuts from '../../assets/images/atalhos.svg';
import imageCar from '../../assets/images/CARRO.png';
import imageCarTurbo from '../../assets/images/CARRO_turbo.gif';
import sceneryBg from '../../assets/images/CENARIO_anima.gif';
import sceneryBgTurbo from '../../assets/images/CENARIO_anima_turbo.gif';
import sceneryBgDefault from '../../assets/images/CENARIO_default.jpg';

export default function Game() {
	const [cartrack, setCartrack] = useState(sceneryBgDefault);
	const [directionX, setDirectionX] = useState('222');
	const [imageCarRace, setImagecar] = useState(imageCar);
	const [playPause, setPlayPause] = useState('PAUSE = P');
	const audioSelectmusicMP3File = new Audio(musicMP3File);

	// Function to perform page load only
	useEffect(() => {
		const promiseMusic = audioSelectmusicMP3File.play();

		if (promiseMusic !== undefined) {
			promiseMusic
				.then((_) => {
					console.log('Autoplay started!');
				})
				.catch((error) => {
					console.log(error);
				});
		}

		let i = 4;
		(function timer() {
			if (--i < 0) return;
			setTimeout(function () {
				if (i === 0) {
					document.getElementById('countdown').innerHTML = 'GO!';
					setTimeout(function () {
						document.getElementById('countdown').style.display = 'none';
						setCartrack(sceneryBg);
					}, 1000);
				} else {
					document.getElementById('countdown').innerHTML = i;
				}
				timer();
			}, 1000);
		})();
	}, []);

	// Key mapping function to control the game
	document.onkeydown = function (event) {
		const audioTurboMP3File = new Audio(turboMP3File);
		event = event || window.event;
		const keycode = event.keyCode;

		switch (keycode) {
			// T = Turbo
			case 84:
				setCartrack(sceneryBgTurbo);
				setImagecar(imageCarTurbo);
				audioTurboMP3File.play();
				setTimeout(function () {
					setCartrack(sceneryBg);
					setImagecar(imageCar);
				}, 4000);
				break;
			case 80:
				// R = Retry
				setCartrack(sceneryBgDefault);
				setImagecar(imageCar);
				setPlayPause('RETRY = R');
				break;
			// P = Pause
			case 82:
				setPlayPause('PAUSE = P');
				setCartrack(sceneryBg);
				break;
			// Direction right
			case 39:
			case 68:
				setDirectionX('415');
				break;
			// Direction middle
			case 37:
			case 65:
				setDirectionX('40');
				break;
			// Direction left
			case 83:
			case 38:
			case 40:
				setDirectionX('222');
		}
	};
	return (
		<React.Fragment>
			<div id='container'>
				<div id='monitor'>
					<div id='monitorscreen'>
						<Scenery cartrack={cartrack}>
							<Header playPause={playPause} />
							<h1 id='countdown' />
							<Car direction={directionX} car={imageCarRace} />
							<Shortcuts src={shortcuts} width='125' />
						</Scenery>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
