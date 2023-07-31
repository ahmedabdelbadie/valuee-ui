import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const StyledCard = styled(CardContent)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.primary.light
      : theme.palette.primary.main,
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  boxShadow: `${theme.spacing(0, 1, 2)} ${theme.palette.boxShadow.dark}`,
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: `${theme.spacing(0, 1, 2)} ${theme.palette.boxShadow.dark}`,
  },
  "&::before": {},
}));

const StyledAvatar = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.main,
  width: 100,
  height: 100,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.8s ease",
  "&:hover": {
    transform: "rotate(360deg)",
  },
  zIndex: 1,
}));

const StyledPriceContainer = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "3rem",
  fontWeight: "bold",
  marginTop: "-10%",
  marginBottom: "10%",
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
  zIndex: 1,
}));
const StyledDollarIcon = styled("span")(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const SalesTodayTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: "12px",
  marginTop: "-40px",
  color:
    theme.palette.mode === "light"
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
}));

const BigCardContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));
const Icon = styled(LocalShippingIcon)(({ theme }) => ({
  fontSize: 60,
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.dark
      : theme.palette.primary.light,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
}));

const PercentageText = styled(Typography)(({ theme }) => ({
  color: "red",
  fontSize: "25px",
  // color: theme.palette.mode === 'light'
  //     ? theme.palette.primary.light
  //     : theme.palette.primary.dark
}));

const CardStatus = ({ headTitle, price, type, percentageText }) => {
  const theme = useTheme();
  const getIcon = (type) => {
    switch (type) {
      case "dolar":
        return <LocalShippingIcon />;
      default:
        return (
          <LocalShippingIcon
            sx={{
              fontSize: theme.spacing(10),
              color: theme.palette.primary.light,
            }}
          />
        );
    }
  };
  return (
    <Card>
      <StyledCard>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs>
            <SalesTodayTypography>{headTitle}</SalesTodayTypography>
          </Grid>
          <Grid item>
            <StyledAvatar
              sx={{
                backgroundColor: "#2469ce",
              }}
            >
              {getIcon(type)}
            </StyledAvatar>
          </Grid>
        </Grid>
        <BigCardContainer>
          <Typography variant="h1" sx={{ mt: 1, mb: 3 }}>
            <StyledPriceContainer>
              <StyledDollarIcon>$</StyledDollarIcon>
              {price}
            </StyledPriceContainer>
          </Typography>
        </BigCardContainer>
        <StyledTypography variant="body1">
          <PercentageText>{percentageText}</PercentageText> Less sales than
          usual
        </StyledTypography>
      </StyledCard>
    </Card>
  );
};

export default CardStatus;
