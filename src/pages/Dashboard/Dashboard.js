import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";

// project imports
import EarningCard from "../../components/Dashboard/EarningCard";
import PopularCard from "../../components/Dashboard/PopularCard";
import TotalOrderLineChartCard from "../../components/Dashboard/TotalOrderLineChartCard";
import TotalIncomeDarkCard from "../../components/Dashboard/TotalIncomeDarkCard";
import TotalIncomeLightCard from "../../components/Dashboard/TotalIncomeLightCard";
import TotalGrowthBarChart from "../../components/Dashboard/TotalGrowthBarChart";
// theme constant
export const gridSpacing = 4;

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing} style={{ marginTop: 10 }}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12} style={{ marginTop: 10 }}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
