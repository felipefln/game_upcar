import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

import ButtonDeadPoll from '../../components/TV/ButtonsHeros/ButtonDeadPoll';
import ButtonCapitaoAmerica from '../../components/TV/ButtonsHeros/ButtonCapitaoAmerica';
import ButtonHulk from '../../components/TV/ButtonsHeros/ButtonHulk';
import ButtonIronMan from '../../components/TV/ButtonsHeros/ButtonIronMan';
import ButtonSubmit from '../../components/TV/ButtonsHeros/ButtonSubmit';

import startMP3File from '../../assets/sounds/music.mp3';
import selectPalyerMP3File from '../../assets/sounds/select_player.mp3';
import musicMP3File from '../../assets/sounds/music.mp3';

toast.configure();

export default function Home() {
	const [name, setName] = useState('')
	const [player, setPlayer] = useState('')
	const audioStartMP3File = new Audio(startMP3File);
	const audioSelectPalyerMP3File = new Audio(selectPalyerMP3File);
	const audioSelectmusicMP3File = new Audio(musicMP3File);

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

	// Function start player
	const startPlayer = () => {
		console.log('star')
		if (document.getElementById('namePlayer').value === '') {
			toast.error('Enter player name.');
		} else if (localStorage.getItem('imagePlayer') === null) {
			toast.error('Select a player.');
		} else {
			audioStartMP3File.play();
			const namePlayer = document.getElementById('namePlayer').value;
			localStorage.setItem('@UpCar:nameplayer', namePlayer);
			setTimeout(function () {
				window.location.href = '/game';
			}, 3000);
		}
	};

	// Function select player
	const selectPlayer = (e) => {
		console.log('play select ', e)
		audioSelectPalyerMP3File.play();
		localStorage.setItem('imagePlayer', player);
		toast.success('Player selected.');
	};

	return (
		<React.Fragment>
			<div id='container'>
				<div id='monitor'>
					<div id='monitorscreen'>
						<div className='box'>
							<div className='title-car'>
								<h1>UPCAR</h1>
							</div>
							<div className='playName'>
								<input
									id='name'
									required
									placeholder='Seu nome'
									className='input-hero'
									value={name}
									onChange={event => setName(event.target.value)}
								/>
							</div>

							<div className='title-player'>
								<h3>SELECIONE O JOGADOR</h3>
							</div>
							<div className="players">
								<ButtonDeadPoll
									src={ButtonDeadPoll}
									onChange={() => setPlayer('deadPoll')}
								/>
								<ButtonCapitaoAmerica
									src={ButtonCapitaoAmerica}
									onChange={event => setName(event.target.value)}
								/>
								<ButtonHulk
									src={ButtonHulk}
									onChange={event => setName(event.target.value)}
								/>
								<ButtonIronMan
									src={ButtonIronMan}
									onChange={event => setName(event.target.value)}
								/>
							</div>

							<Link to='/game' onClick={event => selectPlayer(event)}>
								<ButtonSubmit className='btn-start' />
							</Link>

						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
