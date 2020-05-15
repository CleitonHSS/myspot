import React, {useState, useEffect} from 'react';
import {Text,Container,Link} from '../../../components/atoms';
import {Card,CardGrid,SearchInput} from '../../../components/molecules';
import {PageBase} from '../../../components/organisms';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {css} from 'styled-components';
import {albumsHandle} from '../../../actions/albums';
import { LoginPage } from '..';

const Index = ({history, ...props}) =>{

	const handleCardClick = (album) =>{
		history.push(
			`/Album/${album.name.replace(/[ ():{}=?]/gi,"_")}/${album.artists[0].name.replace(/[ ():{}=?]/gi,"_")}`,
			{id:album.id, album:album.name, artist:album.artists[0].name, image:album.images[1].url, search:search})
	}

	const cardsListBuilder = (srch)=>{
		
		var cardsLists =props.albums.items.map((album) =>(
			((srch && (album.name.toLowerCase().indexOf(srch.toLowerCase())) >= 0)||(srch && (album.artists[0].name.toLowerCase().indexOf(srch.toLowerCase())) >= 0))
			?
				<Link  key={album.id} as="button" onClick={()=>{handleCardClick(album)}}>
					<Card  id={album.id} album={album.name} artist={album.artists[0].name} image={album.images[1].url}/>
				</Link>
			:[]			
		));

		return cardsLists;
	};

	const setTitleValue = (srch)=>(srch?`Resultados encontrados para "${srch}"`:'Álbuns buscados recentemente')

	const [search, setSearch] = useState('');
	const [cards, setCards] = useState([]);
	const [title,setTitle] = useState('');

	useEffect(()=>{
		history.location.state && setSearch(history.location.state.search);
	},[]);

	useEffect(()=>{
		if(props.logged && search){
			props.albumsHandle(props.logged,search);
			props.albums.items && setCards(cardsListBuilder(search));
		}
	},[search]);

	useEffect(()=>{
			props.albums.items && setCards(cardsListBuilder(search));
	},[props.albums.items]);

	if(!props.logged){
		return(<LoginPage/>)
	}
	
    return (
      	<PageBase >
			<Container padding={[16,0]} display="flex" alignself="flex-start" breakpoints={{tablet: css`padding: 48px 124px 128px 64px;`}}>
				<SearchInput
					value={search}
					onChangeSearch={value=>{setSearch(value);setTitle(setTitleValue(value))}}
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


const mapStateToProps = state => ({albums:state.albums})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		albumsHandle
    }, dispatch);
}

export default withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(Index)
);