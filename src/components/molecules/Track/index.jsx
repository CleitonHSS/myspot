import React,{useState} from 'react';
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

const Track = ({position,track, duration}) =>{

	const [playerDisplay, setPlayerDisplay] = useState(false);
	const [audio,setAudio] = useState('')
	const setPlay=(action)=>{action?audio.play():audio.pause()}

	return(
		<Container padding={[0,0,24,0]}>
			<Link as="button" width="100%"  onClick={()=>{setPlayerDisplay(!playerDisplay);setPlay(!playerDisplay)}}>
				<Container direction="row" padding={[0,0,8,0]}>
					<Container direction="row" justify="flex-start">
						<Text hoverweight="bold" width="40px" padding={[0,24,0,0]} color="gray" fontWeight={playerDisplay?"Bold":"Regular"}>
							{position}.
						</Text>
						<Text hoverweight="bold" fontWeight={playerDisplay?"Medium":"Regular"}>
							{track.name}
						</Text>
					</Container>
					<Text hoverweight="bold" width="auto" color="gray"fontWeight={playerDisplay?"Medium":"Regular"}>
						{duration}
					</Text>	
				</Container>
			</Link>
			<AudioPlayer
				src={track.preview_url}
				controls
				playerDisplay={playerDisplay}
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
