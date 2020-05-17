import React,{useState, useEffect} from 'react';
import {Container, Text, Link} from '../../atoms';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const AudioPlayer = styled.audio`
	width:100%;
	height:24px;
	background-color:transparent;
	margin-right:24px;
	display:${({playerDisplay})=>playerDisplay?'block':'none'};
	
`;

const Track = ({position,track, duration, getOpenedPosition, openedPosition}) =>{

	const [audio,setAudio] = useState('')
	
	const setPlay=(play)=>{
		if(play){
			audio.play()
		}
	}

	const sendOpenedPosition = (position) =>{
		getOpenedPosition(position);
	}

	useEffect(()=>{
		if(openedPosition!== position && !audio.paused && !audio.ended && audio.currentTime>0){
			audio.pause()
		}
	},[openedPosition]);

	console.log('openedPosition',openedPosition)
	return(
		<Container padding={[0,0,24,0]}>
			<Link as="button" width="100%"  onClick={()=>{
				(openedPosition!==position)?sendOpenedPosition(position):sendOpenedPosition(0);
				 setPlay(openedPosition!==position);
				 ;}}
			>
				<Container direction="row" padding={[0,0,8,0]}>
					<Container direction="row" justify="flex-start">
						<Text hoverweight="bold" width="40px" padding={[0,24,0,0]} color="gray" fontWeight={openedPosition===position?"Bold":"Regular"}>
							{position}.
						</Text>
						<Text hoverweight="bold" fontWeight={openedPosition===position?"Medium":"Regular"}>
							{track.name}
						</Text>
					</Container>
					<Text hoverweight="bold" width="auto" color="gray"fontWeight={openedPosition===position?"Medium":"Regular"}>
						{duration}
					</Text>	
				</Container>
			</Link>
			<AudioPlayer
				src={track.preview_url}
				controls
				playerDisplay={openedPosition===position}
				ref={(element) => { setAudio(element) }}
			/>
		</Container>
	);
}
  
  // props object.
Track.propTypes = {
	position: PropTypes.number.isRequired,
	track: PropTypes.object.isRequired,
	duration: PropTypes.string.isRequired,
}
 
export default Track;
