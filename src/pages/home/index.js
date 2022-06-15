import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import { appName } from "../../constants/app";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GitHub } from "@mui/icons-material";

const LeftList = ({
  children,
  sx = {
    justifyContent: "flex-start",
    display: "flex",
    width: "100%",
    marginTop: 2,
  },
}) => {
  return <Typography sx={sx}>{children}</Typography>;
};

export const Home = () => {
  return (
    <Container style={{ padding: 20, textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          src="/static/images/profile.jpg"
          sx={{
            width: 150,
            height: 150,
            margin: 5,
          }}
        ></Avatar>
      </Box>
      <Typography fontSize={60} fontWeight={700}>
        Hi, I am Jarupak Srisuchat
      </Typography>
      <Typography fontSize={24} fontWeight={500} color={"primary"}>
        A web3 developer
      </Typography>
      <Box sx={{ m: 5 }} />
      <Button
        color="primary"
        variant="contained"
        sx={{ padding: 2, paddingLeft: 5, paddingRight: 5 }}
      >
        Hire me!
      </Button>
      {/* <Typography fontSize={24} fontWeight={500}>
        My skill
      </Typography> */}
      {/* <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ paddingLeft: 5, paddingRight: 5 }}>
            <Typography color={"primary"}>UI Development</Typography>
            <LeftList>- Reactjs</LeftList>
            <LeftList>- Nextjs</LeftList>
            <LeftList>- HTML</LeftList>
            <LeftList>- CSS</LeftList>
            <LeftList>- Javascript</LeftList>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ paddingLeft: 5, paddingRight: 5 }}>
            <Typography color={"primary"}>Backend Development</Typography>
            <LeftList>- Solidity</LeftList>
            <LeftList>- Nodejs</LeftList>
            <LeftList>- Javascript</LeftList>
            <LeftList>- PHP</LeftList>
          </Box>
        </Grid>
      </Grid> */}
    </Container>
  );
};
