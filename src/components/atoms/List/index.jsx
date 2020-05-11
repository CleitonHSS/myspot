import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {ifProp, prop, switchProp} from 'styled-tools';
import {Container} from '../Container';
import {Text} from '../Text';
import {
  fontWeight,
  calcSize,
  setSizes,
  config
} from '../../../config';

const hash = config.get('hash');

// Component Styles
const ListType = (props) => {
  switch (props.type) {
    case 'ol':
      return (
        <Container {...props} type="ol">
          {props.children.map(item => <li key={hash(item.props.children)}>{item}</li>)}
        </Container>
      );
    case 'ul':
      return (
        <Container {...props} type="ul">
          {props.children.map(item => <li key={hash(item.props.children)}>{item}</li>)}
        </Container>
      );
    case 'checklist':
    default:
      return (
        <Container {...props} type="ul">
          <Text>Vazio</Text>
        </Container>
      );
  }
};

const ListStyle = styled(ListType)`
font-family: ${prop('fontFamily')};
font-weight: ${props => props.fontWeight && `${fontWeight(props.fontWeight)}`};
font-size: ${props => props.fontSize && `${calcSize(props.fontSize)}`};
color: ${ifProp('fontcolor', prop('fontcolor'))};
text-align:${ifProp('align', prop('align'))};
${switchProp('type', {
    ul: css`
      list-style-type: ${prop('styletype')};
    `,
    ol: css`list-style-type: decimal;`,
    checklist: `
      p{
        opacity: 0.54;
        line-height: 1.2rem;
      }
    `
  })
};

margin: ${props => props.margin && `${setSizes(props.margin)}`};
padding: ${props => props.padding && `${setSizes(props.padding)}`};

display: flex;
justify-content: ${prop('justify')};
flex-wrap: ${prop('flexwrap')};
align-items: ${prop('alignitems')};
align-content: ${prop('aligncontent')};
${switchProp('item.direction', {
    vertical: css`
      flex-direction: column;`,
    horizontal: css`
      flex-direction: row;`
  })
};

li{
  display: flex;
  width: ${prop('width')};
  margin: ${props => props.item.margin && `${setSizes(props.item.margin)}`};
  padding: ${props => props.item.padding && `${setSizes(props.item.padding)}`};
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  color: inherit;
  text-align: inherit;
  ${switchProp('direction', {
    vertical: css`
        margin: ${props => props.item.margin && setSizes(props.item.margin)};
        flex-direction: column;`,
    horizontal: css`
        margin: ${props => props.item.margin && setSizes(props.item.margin)};`
  })};
  ${switchProp('type', {
    ul: css`
      list-style: ${prop('styletype')};
      ${ifProp('styletype', 'display: list-item')};`,
    ol: css`
      display: list-item;
      list-style: decimal;`
  })};
}
`;

// Component Core
const List = props => <ListStyle {...props}>{props.children}</ListStyle>;

// Component Props
List.propTypes = {
  type: PropTypes.oneOf(['ul', 'ol', 'checklist']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  styletype: PropTypes.oneOf(['none', 'disc', 'circle']),
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
  fontSize: PropTypes.oneOf([-2, -1, 1, 2, 3, 4, 5, 6]),
  fontcolor: PropTypes.string,
  justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  flexwrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  alignitems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  aligncontent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),
  direction: PropTypes.oneOf(['row', 'column']),
  item: PropTypes.shape({
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
  })
};

List.defaultProps = {
  type: 'ul',
  children: ['Item 01', 'Item 02'],
  margin: [15, 0],
  padding: [15, 0],
  width: 'auto',
  height: 'auto',
  styletype: 'none',
  fontFamily: 'Simplon',
  fontWeight: 'Regular',
  fontSize: 1,
  fontcolor: '#222222',
  justify: 'space-between',
  flexwrap: 'nowrap',
  alignitems: 'flex-start',
  aligncontent: 'center',
  direction: 'column',
  item: {
    direction: 'vertical',
    margin: 0,
    padding: [2, 5]
  }
};

export {List};
export default List;
