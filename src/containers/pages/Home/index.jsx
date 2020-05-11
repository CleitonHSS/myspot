import React, {useState, useEffect} from 'react';
import {Text,Container,Link} from '../../../components/atoms';
import {Card,CardGrid,SearchInput} from '../../../components/molecules';
import {PageBase} from '../../../components/organisms';
import { withRouter } from "react-router-dom";
import {css} from 'styled-components';


const collection=[
	{
		artistName:"Bob Marley",
		albums:[
			{
				albumName:"The Wailing Wailers",
				songs:[
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"}
				]
			},
			{
				albumName:"Soul Rebels",
				songs:[
					{name:"Soul Rebel", 	time:"3:19"},
					{name:"Try Me",			time:"2:45"},
					{name:"It's Alright",	time:"2:34"},
					{name:"No Sympathy",	time:"2:13"},
					{name:"My Cup",			time:"3:34"},
					{name:"Soul Almighty",	time:"2:42"},
					{name:"Rebel's Hop",	time:"2:38"},
					{name:"Corner Stone",	time:"2:28"},
					{name:"400 Years",		time:"2:33"},
					{name:"No Water",		time:"2:08"},
					{name:"Reaction",		time:"2:41"},
					{name:"My Sympathy",	time:"2:41"}
				]
			},
			{
				albumName:"Soul Revolution",
				songs:[
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
				]
			},
			{
				albumName:"The Best of The Wailers",
				songs:[
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"}
				]
			},
			{
				albumName:"Catch a Fire",
				songs:[
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"}
				]
			}
		]
	},
	{
		artistName:"Bob Dylan",
		albums:[
			{
				albumName:"The Freewheelin' Bob Dylan",
				songs:[
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"}
				]
			},
			{
				albumName:"The Times They Are a-Changin'",
				songs:[
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
					{name:"musica1",time:"3:40"},
				]
			}
		]
	}
]
	


const Index = ({history}) =>{

	const cardsListBuilder = (srch)=>{
		var cardsLists = collection.map((artist) =>(
			(srch && (artist.artistName.toLowerCase().indexOf(srch.toLowerCase())) >= 0)
			? artist.albums.map((album)=>(
				<Link  key={album.albumName} as="button" onClick={()=>{history.push("/Album",{album:album, artist:artist.artistName, search:search})}}>
					<Card  album={album} artist={artist.artistName}/>
				</Link>
			)):[]			
		)) 
		return [].concat.apply([], cardsLists);
	};

	const setTitleValue = (srch)=>(srch?`Resultados encontrados para "${srch}"`:'Álbuns buscados recentemente')

	const [search, setSearch] = useState('');
	const [cards, setCards] = useState([]);
	const [title,setTitle] = useState('');

	useEffect(()=>{
		history.location.state && setSearch(history.location.state.search);
	},[]);

	useEffect(()=>{
		setCards(cardsListBuilder(search));
		setTitle(setTitleValue(search));
		
	},[search]);

	
    return (
      	<PageBase >
			<Container padding={[16,0]} display="flex" alignself="flex-start" breakpoints={{tablet: css`padding: 48px 124px 128px 64px;`}}>
				<SearchInput
					value={search}
					onChangeSearch={value=>setSearch(value)}
				/>
				<Container padding={[32,8,40,8]} breakpoints={{tablet: css`padding: 80px 8px 40px 8px;`}}>
					<Text fontSize={24} >{title}</Text>
				</Container>
				<CardGrid >
					{cards}
				</CardGrid>
				
			</Container>
    	</PageBase>
    );
};

export default withRouter(Index);
