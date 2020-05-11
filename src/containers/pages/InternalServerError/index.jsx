import React, {PureComponent as Component} from 'react';
import PropTypes from 'prop-types';
import {Text,Container, Link} from '../../../components/atoms';
import { withRouter } from "react-router-dom";InternalServerError;


class InternalServerError extends Component {


  render() {
    return (
        <Container>
          <Text  fontcolor="#fff" >Tivemos um problema :(</Text>
          <Text fontcolor="#fff">
            Aconteceu um erro e não conseguimos finalizar sua solicitação.
              <br />
            Por favor, aguarde alguns instantes e tente novamente.
          </Text>
            <Link href="/myspot">
              Tentar novamente
            </Link>
        </Container>
    );
  }
}

InternalServerError.propTypes = {
  history: PropTypes.object
};

export default withRouter(InternalServerError);
