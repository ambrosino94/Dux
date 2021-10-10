import { NextPage } from "next";
import { Grid, Container, Typography } from "@mui/material";

const AppHome: NextPage = () => {
  return (
    <Grid container flexDirection="row">
      <Grid item p={2} xs={3}>
        Left
      </Grid>
      <Grid item xs>
        <Container>Right</Container>
      </Grid>
    </Grid>
  );
};

export default AppHome;
