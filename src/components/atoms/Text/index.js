/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {ifProp, prop, switchProp} from 'styled-tools';
import {isNumber} from 'util';
import * as mixins from '../../../config';
import {Default as theme} from '../../../config/themes';

// Component Styles
const TextType = (props) => {
  switch (props.type) {
    case 'span':
      return <span {...props}>{props.children}</span>;
    case 'strong':
      return <strong {...props}>{props.children}</strong>;
    case 'abbr':
      return <abbr {...props}>{props.children}</abbr>;
    case 'legend':
      return <legend {...props}>{props.children}</legend>;
    case 'small':
      return <small {...props}>{props.children}</small>;
    case 'sub':
      return <sub {...props}>{props.children}</sub>;
    case 'sup':
      return <sup {...props}>{props.children}</sup>;
    case 'label':
      return <label {...props}>{props.children}</label>; // eslint-disable-line
    default:
    case 'p':
      return <p {...props}>{props.children}</p>;
  }
};

const colorSolution =(color,theme)=> color.indexOf('#') !== -1 ? color : theme.colors[color];
const lineheightSolution = (lineheight)=>isNumber(lineheight) ? mixins.rem(lineheight) : lineheight;
const textTypeSolution = switchProp('type', {
  span: css`display: ${props => (props.display ? props.display : 'inline')};`,
  strong: css`font-weight: 600;`,
  abbr: css`cursor: help;`,
  legend: css`display: inline-block;margin: 0; padding: 0;`,
  small: css`font-size: ${mixins.calcSize(-1)};text-transform: uppercase;`,
  sub: css`font-size: ${mixins.calcSize(-2)};`,
  sup: css`font-size: ${mixins.calcSize(-2)};`,
  p: css`width: ${props => (props.width ? props.width : '100%')};`,
  label: css`cursor: pointer;`
});

const TextStyle = styled(TextType)`
  font-family: ${prop('fontFamily')};
  font-weight: ${({fontWeight}) => fontWeight && mixins.fontWeight(fontWeight)};
  font-size: ${({fontSize}) => fontSize && mixins.rem(fontSize)};
  color: ${({color,theme})=>colorSolution(color,theme)};
  text-align:${ifProp('align', prop('align'))};
  line-height: ${({lineheight}) => lineheightSolution(lineheight)};
  text-transform: none;
  letter-spacing: ${({letterSpacing}) => letterSpacing};
  ${ifProp('uppercase', 'text-transform: uppercase;')};
  ${ifProp('lowercase', 'text-transform: lowercase;')};
  margin: ${({margin}) => margin && mixins.setSizes(margin)};
  padding: ${({padding}) => padding && mixins.setSizes(padding)};
  width: ${({width}) => width};
  max-width: ${({maxwidth}) => maxwidth};
  height: ${({height}) => height};
  white-space: ${ifProp('nowrap', 'nowrap', prop('whitespace'))};
  ${({opacity}) => opacity && `opacity: ${opacity}`};
  ${textTypeSolution}
  ${mixins.applyBreakpoints}
  &:hover{
    font-weight:${({hoverweight})=>hoverweight?hoverweight:'regular'};
  }
`;

// Component Core
const Text = (props) => {
  return <TextStyle {...props}>{props.children}</TextStyle>;
};
// Component Props
Text.propTypes = {
  type: PropTypes.oneOf(['label', 'span', 'strong', 'abbr', 'legend', 'small', 'sub', 'sup', 'p']),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  width: PropTypes.string,
  height: PropTypes.string,
  lineheight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  letterSpacing: PropTypes.string,
  whitespace: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  nowrap: PropTypes.string,
  hoverweight:PropTypes.string
};

Text.defaultProps = {
  type: 'p',
  align: 'left',
  fontFamily: 'robotoregular',
  fontWeight: 'Regular',
  fontSize: 16,
  color: theme.colors.text,
  margin: [0],
  padding: [0],
  width: '100%',
  height: 'auto',
  lineheight: '1em',
  letterSpacing: 'normal',
  whitespace: 'initial',
  maxwidth: 'initial',
  hoverweight:'regular'
  
};

export {Text};
export default Text;
