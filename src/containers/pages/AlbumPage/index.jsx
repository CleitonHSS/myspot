import React, {useState, useEffect} from 'react';
import {Text,Container,Link,Icon} from '../../../components/atoms';
import {Card,CardGrid,SearchInput} from '../../../components/molecules';
import {PageBase} from '../../../components/organisms';
import { withRouter } from "react-router-dom";
import {css} from 'styled-components';


const songsListBuilder = (songs)=>{
	var i=1;
	var songsList=[];
	songs.map((song)=>{
		songsList.push(	
			<Container direction="row"key={i}>
				<Text>{i}.</Text><Text>{song.name}</Text><Text>{song.time}</Text>	
			</Container>
		);i++;
	});
	return songsList;

}

const AlbumPage = ({history}) =>{

	useEffect(()=>{
		!history.location.state.album && history.push("/");
	},[]);

    return (
      	<PageBase >
			<Container padding={[16,0]} breakpoints={{tablet: css`padding:32px 40px 40px 64px; align-self:flex-start;`}}>
					<Link as="button" fontSize={18} onClick={()=>{history.push("/",{search:history.location.state.search})}}>
						<Icon fillColor="text" size={14} type="arrowLeft" margin={[0,4,0,-4]}/>{"Voltar"}
					</Link>
				<Container padding={[40,0]} direction="row">
					<Card  singleCard album={history.location.state.album} artist={history.location.state.artist}/>
					<Container padding={[0,0,0,64]} alignself="flex-start" >
						{songsListBuilder(history.location.state.album.songs)}
					</Container>
				</Container>
			</Container>
    	</PageBase>
		
    );
};

export default withRouter(AlbumPage);
