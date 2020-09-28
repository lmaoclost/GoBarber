import React from 'react';
import { Text, Button } from 'react-native';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="sair" onPress={signOut} />
    </Container>
  );
};

export default Dashboard;
