import React from 'react';
import {Container} from '../../atoms';
import styled from 'styled-components';



const CardGridStyle = styled(Container)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px 71px;

	@media (max-width:1440px) {
		grid-template-columns: repeat(4, 1fr);
	}

  	@media (max-width:1200px) {
		grid-template-columns: repeat(3, 1fr);
	}

 	@media (max-width:960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width:450px) {
		grid-template-columns: unset;
		justify-content: center;
	}

`;

const CardGrid = ({...prop})=>{
	return(
		<CardGridStyle>
			{prop.children}
		</CardGridStyle>
	);
}
 
export default CardGrid;
