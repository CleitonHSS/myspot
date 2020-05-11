import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {switchProp} from 'styled-tools';
import * as mixins from '../../../config';
import {applyBreakpoints} from '../../../config/styles/mixins';

const LineType = props => <div {...props} />;

const LineStyle = styled(LineType)`
  display: ${props => props.display};
  width: ${props => props.width};
  height: ${props => props.height};
  
  position: ${({position}) => (position || 'static')};
  ${({top}) => (top && `top: ${top}px`)};
  bottom: ${props => props.bottom};
  ${({left}) => (left && `left: ${left}px`)};
  ${({right}) => (right && `right: ${right}px`)};
  
  ${switchProp('direction', {
    vertical: css`
        width: ${props => (props.width ? props.width : '1px')};
        height: ${props => (props.height ? props.height : '300px')}`,
    horizontal: css`height: ${props => (props.height ? props.height : '1px')}`
  })}

  ${switchProp('thickness', {
    hairline: css`
      ${switchProp('direction', {
    vertical: css`width: 1px; height: ${props => (props.height ? props.height : '300px')}`,
    horizontal: css`height: 1px`
  })};`,
    medium: css`
    ${switchProp('direction', {
    vertical: css`width: 3px; height: ${props => (props.height ? props.height : '300px')}`,
    horizontal: css`height: 3px`
  })};`,
    thick: css`
    ${switchProp('direction', {
    vertical: css`width: 5px; height: ${props => (props.height ? props.height : '300px')}`,
    horizontal: css`height: 5px`
  })};`
  })};

  background-color: ${props => props.color};
  margin: ${props => props.margin && `${mixins.setSizes(props.margin)}`};
  padding: ${props => props.padding && `${mixins.setSizes(props.padding)}`};

  ${applyBreakpoints}
`;

const Line = props => <LineStyle {...props} />;

Line.propTypes = {
  display: PropTypes.oneOf(['block', 'inline-block']),
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  color: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array, PropTypes.string]),
  thickness: PropTypes.oneOf(['hairline', 'medium']),
  bottom: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

Line.defaultProps = {
  display: 'block',
  width: '300px',
  height: '1px',
  direction: 'horizontal',
  color: '#4e4e4e',
  margin: 0,
  padding: 0,
  bottom: 'unset'
};

export {Line};
export default Line;
