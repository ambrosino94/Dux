import { useState } from "react";
import { NextPage } from "next";
import {
  Grid,
  Container,
  Drawer,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";

const AppHome: NextPage = () => {
  const drawerWidth = 295;
  const [names, setNames] = useState<string>("");
  const [lastnames, setLastNames] = useState<string>("");

  return (
    <Grid container flexDirection="row" sx={{ height: "100vh" }}>
      <Grid item xs="auto">
        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{
            style: {
              width: drawerWidth,
            },
          }}
          style={{ width: drawerWidth }}
        >
          <Container sx={{ py: 2 }}>
            <Typography variant="h6" component="h2">
              Formulario
            </Typography>
            <Stack spacing={2} sx={{ marginTop: 3 }}>
              {/* Colocar los componentes dentro de Stack */}
              <TextField
                label="Nombres"
                variant="outlined"
                size="small"
                value={names}
                onChange={({ target: { value } }) => {
                  setNames(value);
                }}
              />
              <TextField
                label="Apellidos"
                variant="outlined"
                size="small"
                value={lastnames}
                onChange={({ target: { value } }) => {
                  setLastNames(value);
                }}
              />
              {/* Continuar aca */}
            </Stack>
          </Container>
        </Drawer>
      </Grid>
      <Grid item xs sx={{ py: 2 }}>
        <Container component="main">
          <Typography variant="h6" component="h2">
            CV Preview
          </Typography>
          <Box sx={{ py: 3 }}>
            {names && <Typography>Nombre: {names}</Typography>}
            {lastnames && <Typography>Apellidos: {lastnames}</Typography>}
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default AppHome;
