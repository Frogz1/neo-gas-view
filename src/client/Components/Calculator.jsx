import React from 'react';
import { Statistic, Input, Container, Header, Image, Loader } from 'semantic-ui-react';

// 86400 / avg block time *(0.00000007 * neoCount)=GasPerDay = GasPerDay * GasCost = USD•Day
const DAY = 86400;
const REWARD = 0.00000007;


const Calculator = ({
  gasPrice, blockRate, loaded, neoCount = 100,
}) => {
  const calculateGasEarnings = () => {
    const blocksPerDay = DAY / blockRate;
    const dailyReward = blocksPerDay * (REWARD * neoCount);
    return {
      day: {
        usd: (dailyReward * gasPrice).toFixed(2),
        gas: (dailyReward).toFixed(2),
      },
      week: {
        usd: ((dailyReward * 7) * gasPrice).toFixed(2),
        gas: (dailyReward * 7).toFixed(2),
      },
      month: {
        usd: ((dailyReward * 30) * gasPrice).toFixed(2),
        gas: (dailyReward * 30).toFixed(2),
      },
      year: {
        usd: ((dailyReward * 365) * gasPrice).toFixed(2),
        gas: (dailyReward * 365).toFixed(2),
      },
    };
  };
  const earnings = calculateGasEarnings(neoCount);
  return loaded ?
    (
      <Container>
        {/* <Header as="h2">
            GAS
          <Header.Subheader>
            Estimated earnings based on current block rate and reward
          </Header.Subheader>
        </Header> */}
        <Statistic.Group widths="4">
          <Statistic>
            <Statistic.Value text>${
              earnings.day.usd ?
              earnings.day.usd :
              earnings.day
              }
              <br />GAS {
                earnings.day.gas ?
                earnings.day.gas :
                earnings.day
                }
            </Statistic.Value>
            <Statistic.Label>Per Day</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value text>${
              earnings.week.usd
            }<br />GAS {
              earnings.week.gas
              }
            </Statistic.Value>
            <Statistic.Label>Per Week</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value text>${
              earnings.month.usd
            }<br />GAS {
              earnings.month.gas
              }
            </Statistic.Value>
            <Statistic.Label>Per Month</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value text>${
              earnings.year.usd
              }<br />GAS {
              earnings.year.gas
              }
            </Statistic.Value>
            <Statistic.Label>Per Year</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Container>
    ) : (
      <Loader active />
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
