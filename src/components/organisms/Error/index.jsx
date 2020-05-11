import React from "react";
import { Text, Container,Link } from "../../atoms";

const InternalServerError = props => (
  <div>
    <Container  bgcolor="#101010" margin={[20, 0, 20, 0]}>
      <Text fontcolor="#222" align="center" margin={[20, 0, 20, 0]}>
        Tivemos um problema no sistema.
          <br />
        Tente novamente em alguns minutos.
      </Text>
      <Link>Error</Link>
    </Container>
  </div>
);

export default InternalServerError;