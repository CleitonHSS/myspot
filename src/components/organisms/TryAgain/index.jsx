import React from 'react';
import PropTypes from 'prop-types';
import {Container, Text} from '../../atoms';
import Button from '../../molecules';

const TryAgain = ({onClick, disabled, ...containerProps}) => (
  <Container bgcolor="#101010" margin={[20, 0]} justify="center">
    <Text fontColor="#222" align="center" margin={[20, 0]}>
      Tivemos um problema no sistema.
      <br />
      Tente novamente em alguns minutos.
    </Text>
    <Button onClick={onClick} disabled={disabled} data-context="dacc-btn_tentar_novamente">TryAgain</Button>
  </Container>
);

TryAgain.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

TryAgain.defaultProps = {
  disabled: false
};

export default TryAgain;
