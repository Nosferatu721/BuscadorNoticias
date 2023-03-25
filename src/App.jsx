import { Container, Grid, Typography } from '@mui/material';
import { NoticiasProvider } from './context/NoticiasProvider';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align="center" margin={5} component="h1" variant="h3">
            Buscador de Noticias
          </Typography>
        </header>

        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item lg={4} md={6} xs={12}>
            <Formulario />
          </Grid>
        </Grid>

        <ListadoNoticias />
      </Container>
    </NoticiasProvider>
  );
}

export default App;
