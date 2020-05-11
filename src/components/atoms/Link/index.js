import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as mixins from '../../../config/styles/mixins';
import {Default as theme} from '../../../config/themes';

const LinkType = (props) => {
  switch (props.type) {
    case 'button':
      return <button type="button" {...props} />;
    case 'submit':
      return <button type="submit" {...props}>{props.children}</button>;
    case 'a':
      return <a {...props}>{props.children}</a>
    default:
      return <a {...props}>{props.children}</a>;
  }
};

const colorSolution =(color,theme)=> color.indexOf('#') !== -1 ? color : theme.colors[color] ? theme.colors[color] : theme.colors.link;
const StyledLink = styled(LinkType)`
  display: ${({inline}) => (inline ? 'inline-flex' : 'flex')};
  justify-content: ${({justify}) => justify};
  align-items: ${({alignitems}) => alignitems};
  align-content: ${({aligncontent}) => aligncontent};
  align-self: ${({alignself}) => alignself};

  border: 0;
  background: transparent;
  width: ${({width}) => width};
  height: ${({height}) => height};
  margin: ${({margin}) => mixins.setSizes(margin)};
  padding: ${({padding}) => mixins.setSizes(padding)};
  outline: 0;

  font-family: ${({fontFamily}) => fontFamily || '\'roboto\', robotoregular'};
  font-weight: ${({fontWeight}) => mixins.fontWeight(fontWeight)};
  font-size: ${({fontSize}) => mixins.rem(fontSize)};
  color: ${({color,theme})=>colorSolution(color,theme)};
  text-decoration: ${({textDecoration}) => textDecoration};
  text-align: ${({align}) => align};
  line-height: ${({lineheight}) => (lineheight ? mixins.rem(lineheight) : '1em')};

  cursor: pointer;

  &:hover {
    text-decoration: none;
    font-weight:${mixins.fontWeight("Medium")};
  }

  ${mixins.applyBreakpoints}
`;

const Link = ({
  children, ...props
}) => (
  <StyledLink {...props}>
    {children}
  </StyledLink>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  type: PropTypes.oneOf(['a', 'button', 'submit']).isRequired,
  justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  alignitems: PropTypes.oneOf(['flex-start', 'flex-end', 'center']),
  aligncontent: PropTypes.oneOf(['flex-start', 'flex-end', 'center']),
  alignself: PropTypes.oneOf(['flex-start', 'flex-end', 'center']),
  padding: PropTypes.arrayOf(PropTypes.number),
  margin: PropTypes.arrayOf(PropTypes.number),
  textDecoration: PropTypes.string,
  fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
  fontSize: PropTypes.number,
  color: PropTypes.string,
  align: PropTypes.oneOf(['center', 'left', 'right'])
};

Link.defaultProps = {
  type:'a',
  justify: 'center',
  alignitems: 'center',
  aligncontent: 'center',
  alignself: 'flex-start',
  padding: [0],
  margin: [0],
  fontWeight: 'Regular',
  fontSize: 16,
  color: theme.colors.link,
  textDecoration: 'none',
  align: 'left'
};

export {Link};
export default Link;
