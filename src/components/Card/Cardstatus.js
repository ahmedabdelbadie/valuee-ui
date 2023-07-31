import React from "react";
import { Card, CardContent, Grid, Box, Typography } from "@mui/material";
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
  width: '65px',
  height: "65px",
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
  fontSize: "1.8rem",
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
  // fontWeight: "bold",
  marginBottom: "30px",
  marginTop: "15px",
  color:
    theme.palette.mode === "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light,
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
// const Icon = styled(LocalShippingIcon)(({ theme }) => ({
//   fontSize: 60,
//   color:
//     theme.palette.mode === "dark"
//       ? theme.palette.primary.dark
//       : theme.palette.primary.light,
// }));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
}));

const PercentageText = styled(Typography)(({ theme }) => ({
  color: "red",
  fontSize: "20px",
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
              width: theme.spacing(10),
              height: theme.spacing(10),
              fontSize: theme.spacing(6),
              color: theme.palette.primary.light,
            }}
          />
        );
    }
  };
  return (
    <Card>
      <StyledCard>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            <SalesTodayTypography>{headTitle}</SalesTodayTypography>
          </Box>
          <Box>
            <StyledAvatar
              sx={{
                backgroundColor: "#2469ce",
              }}
            >
              {getIcon(type)}
            </StyledAvatar>
          </Box>
        </Box>
        <BigCardContainer>
          <Typography variant="h1" sx={{ mt: 1, mb: 3 }}>
            <StyledPriceContainer>
              <StyledDollarIcon>$</StyledDollarIcon>
              {price}
            </StyledPriceContainer>
          </Typography>
        </BigCardContainer>
        <Box display="flex" alignItems="center" justifyContent='flex-start' mt={1}>
          <PercentageText>{percentageText}</PercentageText>
          <Box ml={1}>
            <StyledTypography variant="body1">Less sales than usual</StyledTypography>
          </Box>
        </Box>
      </StyledCard>
    </Card>
  );
};

export default CardStatus;
