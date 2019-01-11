import React from 'react';

import RouteMap from './routes';
import Container from './layouts/Container';

export default () => (
  <Container padding="20px" height="100vh" width="100vw">
    <RouteMap />
  </Container>
);