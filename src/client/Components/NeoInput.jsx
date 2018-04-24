import React from 'react';
import { Input, Container, Header, Button } from 'semantic-ui-react';
import CalculatorContainer from '../Containers/CalculatorContainer';

const NeoInput = ({ updateNeoQuantity }) => {
  let showCalculator = false;
  return (
    <div>
      <Container textAlign="center">
        <CalculatorContainer />
        <Header as="h2">
      Check Earnings
          <Header.Subheader>
      Input NEO amount for estimated GAS generation
          </Header.Subheader>
        </Header>
      </Container>
      <Container textAlign="center">
        <Input
          style={{ width: '315px', marginRight: '5px', padding: '5px' }}
          size="small"
          type="number"
          onChange={(e, data) => updateNeoQuantity(Number(data.value))}
        />
        <Button
          color="green"
          onClick={() => {
          showCalculator = !showCalculator;
          console.log(showCalculator);
        }}
        >GO
        </Button>
      </Container>
    </div>
  );
};

export default NeoInput;
