import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import CardStatus from '../../../components/Card/Cardstatus';

import LineChart from '../../../components/Charts/LineChart';
import BarChart from '../../../components/Charts/BarChart';
import DoughnutChart from '../../../components/Charts/Doughnut';
import DataCalenderChart from '../../../components/Charts/DateCalendarChart';
import MapChart from '../../../components/Charts/MapChart';
import DataGridChart from '../../../components/Charts/DataGridChart';
import { Box, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: `${theme.spacing(0, 4, 6)} rgba(126, 142, 177, 0.12)`
}));

export const Dashboard = () => {
  const salesTodayLabel = 'Sales Today';
  const salesPercentage = 25;

  const price = '7856';
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h1">Welcome back, Ahmed!</Typography>
      <Typography variant="h4">You have 24 new messages and 5 new notifications.</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <LineChart />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Grid container>
              <Grid item xs={6}>
                <Item>
                  <CardStatus
                    headTitle={salesTodayLabel}
                    price={price}
                    percentageText={`${salesPercentage}%`}
                  />
                </Item>
              </Grid>{' '}
              <Grid item xs={6}>
                <Item>
                  <CardStatus
                    headTitle={salesTodayLabel}
                    price={price}
                    percentageText={`${salesPercentage}%`}
                  />
                </Item>
              </Grid>{' '}
              <Grid item xs={6}>
                <Item>
                  <CardStatus
                    headTitle={salesTodayLabel}
                    price={price}
                    percentageText={`${salesPercentage}%`}
                  />
                </Item>
              </Grid>{' '}
              <Grid item xs={6}>
                <Item>
                  <CardStatus
                    headTitle={salesTodayLabel}
                    price={price}
                    percentageText={`${salesPercentage}%`}
                  />
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <DataCalenderChart />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <MapChart />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <DoughnutChart />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <DataGridChart />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <BarChart />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
