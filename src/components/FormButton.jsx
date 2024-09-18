import React from 'react';
import {Button} from 'react-native-paper';

const FormButton = () => {
  return (
    <Button
      icon="camera"
      mode="contained"
      onPress={() => console.log('Pressed')}>
      Press me
    </Button>
  );
};

export default FormButton;