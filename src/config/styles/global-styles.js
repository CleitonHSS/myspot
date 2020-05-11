import {createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';


const url ='../../assets/fonts/';
import robotoRegularEOT from '../../assets/fonts/Roboto-Regular-webfont.eot';
import robotoRegularSVG from '../../assets/fonts/Roboto-Regular-webfont.svg';
import robotoRegularTTF from '../../assets/fonts/Roboto-Regular-webfont.ttf';
import robotoRegularWOFF from '../../assets/fonts/Roboto-Regular-webfont.woff';

// const publicPath = config.get('publicPath');

export default createGlobalStyle`
  ${styledNormalize};
  @font-face {
    font-family:'robotoregular';
    src: url(${robotoRegularEOT});
    src: url(${`${robotoRegularEOT}?#iefix`}) format('embedded-opentype'),
         url(${robotoRegularWOFF}) format('woff'),
         url(${robotoRegularTTF}) format('truetype'),
         url(${robotoRegularSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    height: 100%;
  }
  body {
    height: 100%;
    background-color: #0e0e0e;
  }
  #application{
    opacity: 1;
  }
  :disabled {
    cursor: no-drop;
  }
  pre {
    margin: 20px auto;
  }
`;