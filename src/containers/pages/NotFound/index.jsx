import React, {PureComponent as Component} from 'react';
import PropTypes from 'prop-types';
import {Text,Container, Link} from '../../../components/atoms';
import { withRouter } from 'react-router';


class NotFound extends Component {

  render() {
    return (
      <Container bgcolor="#212121" alignitems="center" height="300">
           <Text type="strong"  >Página não encontrada</Text>
            <Text color="light">
              A página que você está tentando acessar não está disponível.
              <br />
              Verifique o endereço digitado e tente novamente.
            </Text>
            <Link color="white">
              Tentar novamente
            </Link>
      </Container>
    );
  }
}
NotFound.propTypes = {
  history: PropTypes.object.isRequired
};


export default withRouter(NotFound);
