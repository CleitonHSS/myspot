import React, {useState, useEffect} from 'react';
import {Container,Link,Icon} from '../../../components/atoms';
import {Card,Track} from '../../../components/molecules';
import {PageBase} from '../../../components/organisms';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {css} from 'styled-components';
import {tracksHandle} from '../../../actions/tracks';
import { LoginPage } from '..';


const AlbumPage = ({history,...props}) =>{


	const { id, album, artist, image, search } = history.location.state;
	const [tracks,setTracks] = useState("");
	const [openedPosition,setOpenedPosition] = useState(0);

	const handleOpenedPosition = (openPosition) => {
		setOpenedPosition(openPosition)
	}

	const trackListBuilder = (tracks)=>{
		var i=1;
		var trackList=[]
		tracks.items.map((track)=>{
			var minutes = Math.floor(track.duration_ms / 60000);
			var seconds = ((track.duration_ms % 60000) / 1000).toFixed(0);
			var duration = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
			trackList.push(
				<Track 
					key={i+"-"+track.name+"-"+track.preview_url}
					position={i} track={track}
					duration={duration}
					getOpenedPosition={handleOpenedPosition}
					openedPosition = {openedPosition}
				/>
			);i++;
		});
		
		return trackList;
	
	}

	if(!props.logged){
		return(<LoginPage/>)
	}

	useEffect(()=>{
		!history.location.state.id && history.push("/");id
		console.log(!history.location.state.id);
	},[]);

	useEffect(()=>{
		props.tracksHandle(props.logged,id)
	},[id]);

	useEffect(()=>{
		props.tracks.items&&
			setTracks(trackListBuilder(props.tracks))
			console.log(!props.tracks);
	},[props.tracks, openedPosition]);

    return (
      	<PageBase >
			<Container padding={[16,0]} breakpoints={{tablet: css`padding:32px 40px 40px 64px; align-self:flex-start;`}}>
					<Link as="button" fontSize={18} onClick={()=>{history.push("/",{search:search})}}>
						<Icon fillColor="text" size={14} type="arrowLeft" margin={[0,4,0,-4]}/>{"Voltar"}
					</Link>
				<Container padding={[40,0]} breakpoints={{tablet: css`flex-direction:row;`}}>
					<Card  singleCard id={id} album={album} artist={artist} image={image}/>
					<Container padding={[0,16]} alignself="flex-start" breakpoints={{tablet: css`padding-left:64px;`}}>
						{tracks}
					</Container>
				</Container>
			</Container>
    	</PageBase>
		
    );
};
const mapStateToProps = state => ({
	tracks:state.tracks
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		tracksHandle
    }, dispatch);
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(AlbumPage)
);
