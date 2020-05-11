import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputStyled = styled.div`

	position: relative;
	padding: 16px 0 0;
	width: 100%;

	.form__field {
		font-family: robotoregular;
		width: 100%;
		font-weight: 700;
		border: 0;
		border-bottom: 2px solid #777777;
		outline: 0;
		font-size: 3rem;
		color: white;
		padding: 14px 8px;
		background: transparent;
		transition: all 600ms ease-out;

		&::placeholder {
			color: #999999;
		}

		&:placeholder-shown ~ .form__label {
			font-size: 1rem;
			cursor: text;
			top: 0px;
		}
	}

	.form__label {
		font-family: robotoregular;
		position: absolute;
		top: 0px;
		left: 8px;
		display: block;
		font-size: 1rem;
		color: #FAFAFA;
	}

	.form__field:focus {
		~ .form__label {
			color: #FFF;
		}
		&::placeholder {
			color: #555555;
		}

	}

	.form__field:hover{
		~ .form__label {
			color: #FFF;
		}
		&::placeholder {
			color: #555555;
			transition: all 600ms ease-out;
		}
		border-color: #FAFAFA;
		border-image-slice: 1;
		transition: all 600ms ease-out;
	}
	/* reset input */
	.form__field{
		&:required,&:invalid { box-shadow:none; }
	}

	@media (max-width:768px) {
		.form__field {
			font-size: 1.8rem;
			padding: 8px;
		}
	}
`;



const SearchInput = ({onChangeSearch,value}) =>{

	const onChangeHandle = (event)=>{
		onChangeSearch(event)
	}

    return (
		<InputStyled>
			<input type="input" value={value} className="form__field" placeholder="Comece a escrever..." name="surch" id='surch' onChange={event => onChangeHandle(event.target.value)} required />
			<label className="form__label">Busque por artistas, albuns ou músicas</label>
		</InputStyled>
	)
}
 
export default SearchInput;
