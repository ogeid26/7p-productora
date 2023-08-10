import { Container, Grid } from "@mui/material";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <Container>
      <NavBar />
      <Grid container spacing={2}>
        <Grid item xs={8}></Grid>
      <h1>Séptimo Piso Productora </h1>
      </Grid>
      <Grid item xs={4}>
      </Grid>
    </Container>
  );
}
export default HomePage;
