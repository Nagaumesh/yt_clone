import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from '../assets/logo.png';
const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />     {/* icon symbol can be changed */}
    </Link>
    <SearchBar/>
    <Button
      href="https://nagaumesh.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      variant="contained" 
      sx={{ backgroundColor: '#ff1744' }}
    >
      Contact Me
    </Button>
  </Stack>
);

export default Navbar;
