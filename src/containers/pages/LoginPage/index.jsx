import React from 'react';
import PropTypes from 'prop-types';
import {Text,Container, Link} from '../../../components/atoms';
import {PageBase} from '../../../components/organisms';
import { withRouter } from 'react-router';
import SPOTIFY_LOGIN from '../../../../private/spotifyLoginPage'
import styled,{css}from 'styled-components';


const LinkButton = styled.a`
  background-color: #222222; /* Green */
  border: none;
  color: #fafafa;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  margin: 16px;
  border-radius: 40px;
  border: 1px solid #fafafa;
  font-weight: regular;
  font-family: robotoregular;

  &:hover{
    border: 2px solid #fafafa;
    font-weight: medium;
  }
`;

const LoginPage = (props)=> {

    if(props.logged){
      return(<Home/>)
    }

    return (
      <PageBase>
        <Container alignitems="center" breakpoints={{tablet: css`padding-right: 64px;`}}>
           <Text type="strong" fontSize={40} margin={[72,16]}width="auto" >Faça seu login com o Spotify!</Text>
  
          <LinkButton  href={SPOTIFY_LOGIN}>
              LOGIN COM SPOTIFY
          </LinkButton>
        </Container>
      </PageBase>
    );
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired
};


export default withRouter(LoginPage);
