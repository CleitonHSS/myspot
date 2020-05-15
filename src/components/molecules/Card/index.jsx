import React from 'react';
import {Container, Img, Text, Link} from '../../atoms';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import PropTypes from 'prop-types';

const CardStyled = styled.div`

	width: ${({singleCard})=>singleCard?'300px':'170px'};
	height:${({singleCard})=>singleCard?'555px':'255px'};
	min-width:${({singleCard})=>singleCard?'300px':'170px'};

	img{
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		transition: 0.3s;
		opacity:${({singleCard})=>singleCard?'100%':'75%'};;
		width:${({singleCard})=>singleCard?'300px':'170px'};
		height:${({singleCard})=>singleCard?'300px':'170px'};
	}

	&&:hover {
		img{
			box-shadow: 0 12px 20px 0 rgba(0,0,0);
			opacity:100%;
		}
	}

	@media (max-width:768px) {
		img {opacity:100%;}
	}
`;

const Card = (props) =>{
    return (
		<CardStyled {...props}>
			<Container margin={[0]} padding={[0]} bgcolor="rgba(144,144,144, 0.4)">
				<Img src={props.image} alt="Avatar"/>
			</Container>
			<Container>
				<Text align="center" padding={props.singleCard?[16,24,8,24]:[8,8,2,8]} fontSize={props.singleCard?18:14}  >
					{props.album}
				</Text>
				<Text align="center" padding={props.singleCard?[8,24,0,24]:[8,8,0,8]} fontSize={14} color="gray" >
					{props.artist}
				</Text>
			</Container>
		</CardStyled>
	)
}

Card.defaultProps = {
	album: "",
	singleCard: false,
	artist: "",
	id:"",
	image:""
  };
  
  // props object.
Card.propTypes = {
	album: PropTypes.string.isRequired,
	singleCard: PropTypes.bool,
	artist: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}
 
export default Card;
