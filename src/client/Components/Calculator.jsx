import React from 'react';
import { Statistic, Input, Container, Button, Image} from 'semantic-ui-react';

// 86400 / avg block time *(0.00000007 * neoCount)=GasPerDay = GasPerDay * GasCost = USD•Day
const DAY = 86400;
const REWARD = 0.00000007;


const Calculator = ({ gasPrice, blockRate, neoCount = 100 }) => {
  const calculateGasEarnings = () => {
    const blocksPerDay = DAY / blockRate;
    const dailyReward = blocksPerDay * (REWARD * neoCount);
    return {
      day: dailyReward,
      week: dailyReward * 7,
      month: dailyReward * 30,
      year: dailyReward * 365,
    };
  };
  const earnings = calculateGasEarnings(neoCount);
  return (
    <Container fluid>
      <Statistic.Group>
        <Statistic>
          <Statistic.Value text>${(earnings.day * gasPrice).toFixed(2)}<br />GAS {earnings.day.toFixed(2)}</Statistic.Value>
          <Statistic.Label>Per Day</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value text>${(earnings.week * gasPrice).toFixed(2)}<br />GAS {earnings.week.toFixed(2)}</Statistic.Value>
          <Statistic.Label>Per Week</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value text>${(earnings.month * gasPrice).toFixed(2)}<br />GAS {earnings.month.toFixed(2)}</Statistic.Value>
          <Statistic.Label>Per Month</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value text>${(earnings.year * gasPrice).toFixed(2)}<br />GAS {earnings.year.toFixed(2)}</Statistic.Value>
          <Statistic.Label>Per Year</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Container>
  );
};

{ /* <Container style={{ margin: '10px' }} textAlign="center">

<Input
style={{ width: '315px', marginRight: '5px' }}
size="small"
type="text"

/>
<Button size="medium">
    Calculate
</Button>
<footer>Donations welcome :)</footer>
</Container> */ }

export default Calculator;
