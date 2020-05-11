import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {ifProp, prop, switchProp} from 'styled-tools';
import * as mixins from '../../../config';

const ImgTag = props => <img {...props} />

const ImgStyle = styled(ImgTag)`
width: ${props => props.width};
height: ${props => props.height ? props.height : props.width};
${switchProp('icon', {
	x16: css`width: 16px; height: 16px;`,
	x32: css`width: 32px; height: 32px;`,
	x64: css`width: 64px; height: 64px;`
})};
${switchProp('thumb', {
	x128: css`width: 128px; height: 128px;`,
	x256: css`width: 256px; height: 256px;`,
	x320: css`width: 320px; height: 320px;`
})}
${props => props.responsive && `width:100%; height: auto;`}
margin: ${props => props.margin && `${mixins.setSizes(props.margin)}`};
padding: ${props => props.padding && `${mixins.setSizes(props.padding)}`};
`;

const Img = (props) => {
	return <ImgStyle {...props} />;
};

Img.propTypes = {
	margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
	padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
	icon: PropTypes.oneOf(['x16', 'x32', 'x64']),
	thumb: PropTypes.oneOf(['x128', 'x256', 'x320']),
	responsive: PropTypes.bool,
	width: PropTypes.string.isRequired,
	height: PropTypes.string,
	alt: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired
};

Img.defaultProps = {
	width: '200px',
	margin: 0,
	padding: 0
};

export {Img};
export default Img;
