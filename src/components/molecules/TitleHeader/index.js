import React from 'react';

import {Link, Container, Text} from '../../atoms';

const TitleHeader = ({title, description, saibaMais, context}) => {
  return (
    <Container style={{flex: 8}}>
      <Text type="strong" fontSize={32} uppercase>
        {title}
      </Text>
      <Container>
        <Text fontSize={16} lineheight={20} type="span" fontcolor="#909090">
          {description}
          &nbsp;
        </Text>
        {saibaMais && (
          <Text type="span">
            <Link href={saibaMais} fontSize={16} data-context={context}>
              Saiba mais
            </Link>
          </Text>
        )}
      </Container>
    </Container>
  );
};

export {TitleHeader};
export default TitleHeader;
