import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }
 
  function goAbout() {
    navigate("/about");
  }

  function goProjects() {
    navigate("/projects");
  }

  function goContact() {
    navigate("/contact")
  }
  

  return (
    <AppBar position="static" sx={{ backgroundColor: "#808080" }}>
      <Box sx={{}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a  style={{ color: '#FFF' }} onClick={goHome}> 7P</a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

            <Button variant="text" sx={{ color: "white", display: "flex" }}
            onClick={goHome}>
              Inicio
            </Button>

            <Button variant="text" sx={{ color: "white", display: "flex" }}
            onClick={goProjects}>
              Proyectos
            </Button>

            <Button
              variant="text"
              sx={{ color: "white", display: "flex" }}
              onClick={goAbout}>
              Sobre Nosotros
            </Button>

            <Button variant="text" sx={{ color: "white", display: "flex" }}
            onClick={goContact}>
              Contacto
            </Button>

          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
