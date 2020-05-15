import React, {PureComponent as Component} from 'react';
import PropTypes from 'prop-types';
import {Text,Container, Link} from '../../../components/atoms';
import {PageBase} from '../../../components/organisms';
import { withRouter } from 'react-router';


class NotFound extends Component {

  render() {
    return (
      <PageBase>
        <Container width="100%" height="100%" padding={[300]} alignitems="center" >
           <Text type="strong" fontSize={40} width="auto" >Página não encontrada</Text>
            <Text color="text" fontSize={24}>
              A página que você está tentando acessar não está disponível.
            </Text>
            <Text color="text" fontSize={24}>
              Verifique o endereço digitado e tente novamente.
            </Text>
          <Link  alignself="center" href="/" padding={[16]} color="text" fontSize={24} textDecoration="underline" >
              Tentar novamente
            </Link>
          </Container>
      </PageBase>
    );
  }
}
NotFound.propTypes = {
  history: PropTypes.object.isRequired
};


export default withRouter(NotFound);
