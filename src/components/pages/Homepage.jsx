import React from 'react';
import styled from 'styled-components';

import Text from '../UI/atoms/input';

const Homepage = () => (
  <Homepage.Container>
    <Text fontSize='sm' color='purpleLight'> Welcome to Atomic Design Pattern </Text>
  </Homepage.Container>
);

Homepage.Container = styled.h1``;
export default Homepage;
