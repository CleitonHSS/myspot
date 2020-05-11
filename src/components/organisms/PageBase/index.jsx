import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Loader, Icon
} from '../../atoms';
import {withTheme, css} from 'styled-components';


const PageBase = ({
  bodyBackground,
  containerBackground,
  children,
  containerFluid,
  theme,
  ...props
}) => {

  const [loading, setLoading] = React.useState(true);


  /*if (loading) {
    return (
      <Container height="100vh" justify="center" bgcolor={bodyBackground}>
        <Loader />
      </Container>
    );
  }*/

  return (
    <Container bgcolor={containerBackground}  alignitems="flex-start">
      <Container
        width="100%"
        minheight="100vh"
        height="100%"
        alignitems="stretch"
        maxwidth={!containerFluid && theme.container ? theme.container : '100%'}
        overflowx="visible"
        overflowy="visible"
        direction="row"
      >
        <Container 
          alignself="stretch"
          alignitems="flex-start"
          justify="flex-start"
          bgcolor="#161616"
          padding={[15]}
          breakpoints={{
            tablet: css`
              padding: 32px 27px;
              flex-direction:row;
            `
          }}
        >
          <Icon fillColor="#000" size={54} type="spotifyIcon" />
          {children}
        </Container>
      </Container>

    </Container>
  );
};

PageBase.propTypes = {
  bodyBackground: PropTypes.string,
  children: PropTypes.node.isRequired,
  containerBackground: PropTypes.string,
  containerFluid: PropTypes.bool,
  theme: PropTypes.object, // eslint-disable-line
};

PageBase.defaultProps = {
  bodyBackground: '#0e0e0e',
  containerFluid: false,
  containerBackground: 'transparent',
};

export default withTheme(PageBase);
